﻿function foo()
{
  Log.Message(aqEnvironment.GetEnvironmentVariable("JAVA_HOME"))
  var command = "setx JAVA_HOME -m \"C:\\Program Files\\Java\\jdk-10.0.2\""
  WshShell.Exec(command)
  var obj = new ActiveXObject("WScript.shell")
  var run = obj.Exec("powershell -command echo %JAVA_HOME%")
  var stdOut = run.StdOut
  Log.Message(stdOut.ReadAll())
}