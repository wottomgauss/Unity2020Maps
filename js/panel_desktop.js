function build_desktop_panel()
{
    var panel = d3.select("#panel").style('display', 'flex').style('flex-direction', 'column').style('justify-content', 'space-between')

    var header = panel.append('div').style('display', 'flex').style('flex-direction', 'column')
    var footer = panel.append('div').style('display', 'flex').style('flex-direction', 'column')

    header.append("div")
	.text("Unity 2020")
	.style("font-size", "30px")
	.style("text-align", 'center')

    header.append("div")
	.text("Outreach Areas")
	.style("font-size", "20px")
	.style("text-align", 'center')

    header.append('button')
	.style('margin-top', '20px')
	.text("Print / Save Map")
	.style('content-align', 'center')
	.style('margin-left', '10px')
	.style('margin-right', '10px')
	.style('margin-top', '30px')
	.on('click', function()
	    {
		var modeToUse = L.control.browserPrint.mode.auto();
		map.printControl.print(modeToUse);
	    })

    header.append('div')
	.style('margin-top', '20px')
	.text("Welcome volunteers! Use this map to find areas near you that may have the highest possibility of supporting the Unity2020 message.")


    var legend_data = [[{name: "Likely", color: ""}, {name: null, color: "purple"}],
		       [{name: "Possible", color: ""}, {name: null, color: "orange"}],
		       [{name: "Not Likely", color: ""}, {name: null, color: "green"}],
		      ]
    header.append('table')
	.style('margin-top', '20px')
	.append('tbody')
	.selectAll('tr').data(legend_data).enter().append('tr')
	.selectAll('td').data(function(d) {return d})
	.enter().append('td')
	.style('width', '100px')
	.style('opacity', function(d)
	       {
		   if (d.name) {return 1}
		   else return 0.5
	       })
	.text(function(d){return d.name})
	.style('background-color', function(d){return d.color})

    header.append('div')
	.attr('id', 'custom-map-controls')

    
    footer.append('div')
	.text("Data Sources:")
	.style('margin-top', '100px')
	.style('margin-bottom', '10px')
    
    footer.append('a')
	.html("Voter Data")
	.attr("href", "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/VOQCHQ")
    

}
