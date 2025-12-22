# 重命名图片文件夹脚本
$basePath = "docs\images"
$controlsPath = Join-Path $basePath "控件照片"

# 中文到英文的映射
$folderMapping = @{
    "按钮" = "button"
    "复选框" = "checkbox"
    "单选按钮" = "radiobutton"
    "状态按钮" = "statusbutton"
    "导航菜单" = "navigationmenu"
    "报警列表" = "alarmlist"
    "变量列表" = "variablelist"
    "历史检索" = "historicalretrieval"
    "文本标签" = "textlabel"
    "值显示" = "valuedisplay"
    "画面容器" = "pagecontainer"
    "模态框" = "modal"
    "内嵌网页" = "iframe"
    "绘图介绍" = "drawingintroduction"
    "折线" = "zigzagline"
    "多边形" = "polygon"
    "管道" = "pipeline"
    "事件列表" = "eventlist"
    "下拉框" = "dropdownbox"
    "文本输入框" = "textinputbox"
    "滑动条" = "slider"
    "日历" = "calendar"
    "数字输入框" = "digitalinputbox"
    "实时趋势" = "realtimetrend"
    "历史趋势" = "historicaltrend"
    "自定义曲线" = "customcurve"
    "仪表盘" = "dashboard"
    "形状介绍" = "shapeintroduction"
    "椭圆" = "ellipse"
    "矩形" = "rectangle"
    "圆角矩形" = "roundrectangle"
    "直线" = "straightline"
    "水平线" = "horizontalline"
    "垂直线" = "verticalline"
    "历史报表" = "historicalreport"
}

# 重命名主文件夹
if (Test-Path $controlsPath) {
    $newControlsPath = Join-Path $basePath "controls"
    if (-not (Test-Path $newControlsPath)) {
        Rename-Item -Path $controlsPath -NewName "controls"
        Write-Host "Renamed 控件照片 to controls"
    }
    $controlsPath = $newControlsPath
}

# 重命名子文件夹
foreach ($item in $folderMapping.GetEnumerator()) {
    $oldPath = Join-Path $controlsPath $item.Key
    $newPath = Join-Path $controlsPath $item.Value
    if (Test-Path $oldPath) {
        if (-not (Test-Path $newPath)) {
            Rename-Item -Path $oldPath -NewName $item.Value
            Write-Host "Renamed $($item.Key) to $($item.Value)"
        }
    }
}

Write-Host "Folder renaming completed!"

