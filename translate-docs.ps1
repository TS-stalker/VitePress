# 批量翻译英文文档的PowerShell脚本
# 使用方法: .\translate-docs.ps1 -FilePattern "docs/en/ManagementPlatform/*.md"

param(
    [string]$FilePattern = "docs/en/*.md",
    [switch]$Backup = $true,
    [switch]$DryRun = $false,
    [int]$MaxFiles = 5
)

Write-Host "🔄 文档翻译脚本启动" -ForegroundColor Cyan
Write-Host "📁 搜索模式: $FilePattern" -ForegroundColor Yellow
Write-Host "🔒 备份模式: $(if($Backup){'启用'}else{'禁用'})" -ForegroundColor Yellow
Write-Host "🧪 试运行模式: $(if($DryRun){'启用'}else{'禁用'})" -ForegroundColor Yellow
Write-Host "📊 最大处理文件数: $MaxFiles" -ForegroundColor Yellow
Write-Host ""

# 获取需要翻译的文件
$files = Get-ChildItem -Path $FilePattern -File | Where-Object { $_.Extension -eq '.md' }

if ($files.Count -eq 0) {
    Write-Host "❌ 未找到需要翻译的文件" -ForegroundColor Red
    exit 1
}

Write-Host "📋 找到 $($files.Count) 个文件需要翻译" -ForegroundColor Green

# 限制处理文件数量
$filesToProcess = if ($files.Count -gt $MaxFiles) {
    Write-Host "⚠️  找到的文件数超过最大限制($MaxFiles)，只处理前 $MaxFiles 个文件" -ForegroundColor Yellow
    $files | Select-Object -First $MaxFiles
} else {
    $files
}

Write-Host "🎯 将处理以下文件:" -ForegroundColor Cyan
$filesToProcess | ForEach-Object { Write-Host "  📄 $($_.Name)" -ForegroundColor White }
Write-Host ""

# 翻译函数
function Translate-Content {
    param([string]$content)

    # 这里是翻译逻辑，你可以根据需要调整
    # 目前只是示例，实际翻译需要调用翻译API或手动处理

    # 标题翻译
    $content = $content -replace '^## 一、(.+)$', '## 1. $1'  # 先保持中文，后续可以替换为英文
    $content = $content -replace '^## 二、(.+)$', '## 2. $1'
    $content = $content -replace '^## 三、(.+)$', '## 3. $1'
    $content = $content -replace '^## 四、(.+)$', '## 4. $1'

    # 常用术语翻译示例
    $content = $content -replace '连接管理', 'Connection Management'
    $content = $content -replace '设备管理', 'Device Management'
    $content = $content -replace '系统', 'System'
    $content = $content -replace '配置', 'Configuration'

    return $content
}

# 处理每个文件
$processedCount = 0
$successCount = 0
$errorCount = 0

foreach ($file in $filesToProcess) {
    $processedCount++
    Write-Host "🔄 [$processedCount/$($filesToProcess.Count)] 处理文件: $($file.Name)" -ForegroundColor Cyan

    try {
        # 读取文件内容
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8

        if ($DryRun) {
            Write-Host "  🧪 试运行模式 - 跳过实际翻译" -ForegroundColor Yellow
            $successCount++
            continue
        }

        # 备份原文件
        if ($Backup) {
            $backupPath = "$($file.FullName).backup"
            Copy-Item -Path $file.FullName -Destination $backupPath -Force
            Write-Host "  💾 备份已创建: $($file.Name).backup" -ForegroundColor Gray
        }

        # 翻译内容
        Write-Host "  🌐 开始翻译内容..." -ForegroundColor Blue
        $translatedContent = Translate-Content -content $content

        # 保存翻译后的内容
        Set-Content -Path $file.FullName -Value $translatedContent -Encoding UTF8

        Write-Host "  ✅ 翻译完成" -ForegroundColor Green
        $successCount++

    } catch {
        Write-Host "  ❌ 处理失败: $($_.Exception.Message)" -ForegroundColor Red
        $errorCount++
    }
}

# 输出统计信息
Write-Host ""
Write-Host "📊 处理完成统计:" -ForegroundColor Cyan
Write-Host "  📄 总文件数: $processedCount" -ForegroundColor White
Write-Host "  ✅ 成功: $successCount" -ForegroundColor Green
Write-Host "  ❌ 失败: $errorCount" -ForegroundColor Red

if ($DryRun) {
    Write-Host ""
    Write-Host "🧪 试运行模式 - 没有实际修改文件" -ForegroundColor Yellow
    Write-Host "💡 要执行实际翻译，请移除 -DryRun 参数" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "🎉 脚本执行完毕!" -ForegroundColor Green