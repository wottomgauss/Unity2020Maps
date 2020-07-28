  
function getColorFromProperty1(properties, column)
  // Color the polygons based on the vote totals of each individual polygon
  {
      // In this map example, color is calcualated from the total 3rd party votes
      var metric = properties[column]
      
      var style = {fillColor: "green",
		   fillOpacity: 0.5,
		   fill: true,
		   color: "transparent"} 
      if (metric < 4)
      {
	  style.fillColor = "black"
      }
      else if (metric < 5)
      {
	  style.fillColor = "green"
      }
      else if (metric < 7)
      {
	  style.fillColor = "yellow"
      }

      else if (metric ==  7)
      {
	  style.fillColor = "orange"
      }
      else if (metric == 8)
      {
	  style.fillColor = "purple"
      }

      else if (metric < 11)
      {
	  style.fillColor = "#990099"
      }
      
      return style

  }

  
function getColorFromProperty2(properties, column)
  // Color the polygons based on the vote totals of each individual polygon
  {
      // In this map example, color is calcualated from the total 3rd party votes
      var metric = properties[column]
      
      var style = {fillColor: "green",
		   fillOpacity: 0.5,
		   fill: true,
		   color: "transparent"} 
      if (metric < 2)
      {
	  style.fillColor = "black"
      }
      else if (metric < 8)
      {
	  style.fillColor = "green"
      }
      else if (metric < 9)
      {
	  style.fillColor = "yellow"
      }

      else if (metric < 10)
      {
	  style.fillColor = "orange"
      }
      else if (metric == 10)
      {
	  style.fillColor = "purple"
      }
      
      return style
  }

