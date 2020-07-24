  
  function getColorFromProperty(properties)
  // Color the polygons based on the vote totals of each individual polygon
  {
      // In this map example, color is calcualated from the total 3rd party votes
      var metric = properties.percentile
      
      var style = {fillColor: "green",
		   fillOpacity: 0.5,
		   fill: true,
		   color: "transparent"} 
      if (metric < 3)
      {
	  style.fillColor = "black"
      }
      else if (metric < 5)
      {
	  style.fillColor = "green"
      }
      else if (metric < 7)
      {
	  style.fillColor = "orange"
      }
      else if (metric < 11)
      {
	  style.fillColor = "purple"
      }
      
      return style
  }
