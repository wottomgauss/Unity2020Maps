  
  function getColorFromProperty(properties)
  // Color the polygons based on the vote totals of each individual polygon
  {
      // In this map example, color is calcualated from the total 3rd party votes
      var metric = properties.nonvotes
      
      var style = {fillColor: "green",
		   fillOpacity: 0.4,
		   fill: true,
		   color: "transparent"} 
      if (metric < 30)
      {
	  style.fillColor = "grey"
      }
      else if (metric < 40)
      {
	  style.fillColor = "green"
      }
      else if (metric < 100)
      {
	  style.fillColor = "orange"
      }
      else if (metric < 200)
      {
	  style.fillColor = "purple"
      }
      
      return style
  }
