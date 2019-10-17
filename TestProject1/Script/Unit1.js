function Test()
{
  var PropArray, ValuesArray, p, w;
  var prop1 = "Section"
  var  prop2 = "footnote"
  Browsers.Item(btChrome).Run("https://smartbear.com/")
  // Creates arrays of property names and values
  PropArray = ["ObjectType","ObjectIdentifier" ,"Visible"]
  ValuesArray = [prop1,prop2,true]

  // Searches for the window
  p = Sys.Browser("chrome").WaitPage("*smartbear*",1000)
  w = p.FindChildEx(PropArray, ValuesArray, 5000,false, 2000);

  // Processes the search results
  if (w.Exists)
    Sys.HighlightObject(w)
  else
    Log.Error("The object was not found.");
}


function spacing_issue()
{
  var obj= Sys.Browser("chrome").Page("https://smartbear.com/").Form("form").FindChild(["ObjectIdentifier","ObjectType"],[0,"Section"])
  Sys.HighlightObject(obj)
  var problem = Sys.Browser("chrome").Page("https://smartbear.com/").FindChild("idStr","testing 123",100);
  if(problem.Exists ==true){
    Log.Message("found")
  }
  else{
    Log.Error("not found")
  }

}


function frame_issue_properly_working()
{
  var obj = Sys.Browser("chrome").Page("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_frame_cols").FindChild(["ObjectIdentifier","ObjectType"],[0,"Frame"],1000)
  Sys.HighlightObject(obj)
  var problem = obj.FindChild("contentText", "Frame A",1000)
  if(problem.Exists ==true){
    Log.Message("found")
  }
  else{
    Log.Error("not found")

  }
}

function frame_broken(){
  var problem = Sys.Browser("iexplore").Page("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_frame_cols").FindChild("contentText", "Frame A",1000)
  Sys.HighlightObject(problem)
  if(problem.Exists ==true){
    Log.Message("found")
  }
  else{
    Log.Error("not found")
  }
  
}

function get_date_made()
{
  Log.Message(aqFile.GetLastWriteTime("C:\\Users\\sean.oneil\\Desktop\\Book1.csv"))
}


function main(){
  var obj =  Sys.Browser("firefox").Page("https://demo.bpmn.io/new").Panel("js_drop_zone").Panel("js_canvas").Panel(0).Panel(0).SVG(0) 
   click_btn(svg, "OpenLayers.Layer.Vector_83_root");

}

function click_pinPoint(svg, id)
{
  // Find the button container object by id
  var pintPoint = svg.contentDocument.getElementById(id);
  if (pinPoint != null)
  {
    // Obtain the screen coordinates of the object
    var rect = pinPoint.getBoundingClientRect();
    // Calculate the coordinates of the object center
    var x = rect.left + rect.width/2;
    var y = rect.top + rect.height/2;
    // Click the page using these coordinates
    svg.Click(x, y);
    Delay(1000);
  } else {
    Log.Error("SVG object not found.")
  }
} 