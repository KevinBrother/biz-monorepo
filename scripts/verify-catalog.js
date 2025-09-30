#!/usr/bin/env node

/**
 * 验证 pnpm catalog 配置的脚本
 */

const fs = require('fs')
const path = require('path')

function getPackageJsonFiles(dir = '.', files = []) {
  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (
      stat.isDirectory() &&
      item !== 'node_modules' &&
      !item.startsWith('.')
    ) {
      getPackageJsonFiles(fullPath, files)
    } else if (item === 'package.json') {
      files.push(fullPath)
    }
  }

  return files
}

function getCatalogDependencies() {
  const workspaceFile = 'pnpm-workspace.yaml'
  if (!fs.existsSync(workspaceFile)) {
    console.log('❌ pnpm-workspace.yaml 文件不存在')
    return new Set()
  }

  const content = fs.readFileSync(workspaceFile, 'utf8')
  const catalogSection = content.match(
    /catalog:\s*([\s\S]*?)(?=\n\S|\n$|$)/
  )?.[1]

  if (!catalogSection) {
    console.log('❌ pnpm-workspace.yaml 中没有找到 catalog 配置')
    return new Set()
  }

  const catalogDeps = new Set()
  const lines = catalogSection.split('\n')

  for (const line of lines) {
    const match = line.trim().match(/^["']?([^"':]+)["']?\s*:/)
    if (match && !line.trim().startsWith('#')) {
      catalogDeps.add(match[1])
    }
  }

  console.log(`✅ Catalog 中定义了 ${catalogDeps.size} 个依赖:`)
  Array.from(catalogDeps)
    .sort()
    .forEach(dep => {
      console.log(`   📦 ${dep}`)
    })

  return catalogDeps
}

function verifyCatalogUsage() {
  const packageFiles = getPackageJsonFiles()
  const catalogDeps = getCatalogDependencies()

  let totalCatalogUsage = 0
  let totalPossibleUsage = 0

  console.log('\n🔍 检查各项目的 catalog 使用情况:\n')

  packageFiles.forEach(file => {
    const packageJson = JSON.parse(fs.readFileSync(file, 'utf8'))
    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    }

    let catalogUsageInFile = 0
    let possibleUsageInFile = 0
    const nonCatalogDeps = []

    Object.entries(allDeps || {}).forEach(([name, version]) => {
      if (catalogDeps.has(name)) {
        possibleUsageInFile++
        if (version === 'catalog:') {
          catalogUsageInFile++
        } else {
          nonCatalogDeps.push(`${name}: ${version}`)
        }
      }
    })

    totalCatalogUsage += catalogUsageInFile
    totalPossibleUsage += possibleUsageInFile

    const usageRate =
      possibleUsageInFile > 0
        ? ((catalogUsageInFile / possibleUsageInFile) * 100).toFixed(1)
        : '0.0'
    const status =
      usageRate === '100.0' ? '✅' : usageRate === '0.0' ? '❌' : '⚠️'

    console.log(
      `${status} ${file}: ${catalogUsageInFile}/${possibleUsageInFile} (${usageRate}%)`
    )

    if (nonCatalogDeps.length > 0) {
      nonCatalogDeps.forEach(dep => {
        console.log(`     🔸 ${dep}`)
      })
    }
  })

  const overallRate =
    totalPossibleUsage > 0
      ? ((totalCatalogUsage / totalPossibleUsage) * 100).toFixed(1)
      : '0.0'

  console.log(
    `\n📊 总体使用率: ${totalCatalogUsage}/${totalPossibleUsage} (${overallRate}%)`
  )

  if (overallRate === '100.0') {
    console.log('🎉 所有可能的依赖都已使用 catalog 管理！')
  } else {
    console.log('💡 建议将上述未使用 catalog 的依赖更新为 "catalog:" 语法')
  }
}

verifyCatalogUsage()
