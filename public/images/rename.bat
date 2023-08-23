@echo off
setlocal enabledelayedexpansion

set "folder=%~dp0"
cd /d "%folder%"

for %%F in (*) do (
    set "filename=%%~nxF"
    set "newname=!filename: =-!"
    set "newname=!newname:@=-!"
    if not "!filename!"=="!newname!" (
        ren "%%F" "!newname!"
        echo Renamed "%%F" to "!newname!"
    )
)

pause