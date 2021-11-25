Set WshShell = CreateObject("WScript.Shell") 
WshShell.Run chr(34) & "client.bat" & Chr(34), 1
WshShell.Run chr(34) & "api.bat" & Chr(34), 1
Set WshShell = Nothing