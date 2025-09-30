#!/usr/bin/env node

/**
 * 检查依赖版本一致性的脚本
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

function checkDependencyConsistency() {
  const packageFiles = getPackageJsonFiles()
  const dependencyVersions = new Map()

  // 收集所有依赖版本 (排除 peerDependencies)
  packageFiles.forEach(file => {
    const packageJson = JSON.parse(fs.readFileSync(file, 'utf8'))
    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    }

    Object.entries(allDeps || {}).forEach(([name, version]) => {
      if (!dependencyVersions.has(name)) {
        dependencyVersions.set(name, new Map())
      }
      dependencyVersions.get(name).set(file, version)
    })
  })

  // 检查版本冲突
  const conflicts = []
  dependencyVersions.forEach((versions, depName) => {
    const uniqueVersions = new Set(versions.values())
    if (uniqueVersions.size > 1) {
      conflicts.push({
        dependency: depName,
        versions: Array.from(versions.entries()),
      })
    }
  })

  if (conflicts.length > 0) {
    console.log('❌ 发现依赖版本冲突:')
    conflicts.forEach(conflict => {
      console.log(`\n📦 ${conflict.dependency}:`)
      conflict.versions.forEach(([file, version]) => {
        console.log(`  ${file}: ${version}`)
      })
    })
    process.exit(1)
  } else {
    console.log('✅ 所有依赖版本一致')
  }
}

checkDependencyConsistency()
