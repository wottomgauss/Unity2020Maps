/* global L, map */

function build_legend()
{   
    var legend_data = [
        {name: "&bigstar; &bigstar; &bigstar; &bigstar; &bigstar;", color: "purple"},
        {name: "&bigstar; &bigstar; &bigstar; &bigstar;", color: "orange"},
        {name: "&bigstar; &bigstar; &bigstar;", color: "yellow"},
        {name: "&bigstar; &bigstar;", color: "green"},
        {name: "&bigstar;", color: "black"}
    ]
    
    var table = jQuery(`<table class="legend"></table>`)
    var tBody = jQuery("<tbody></tbody>").appendTo(table)
    
    for (let i=0; i<legend_data.length; i++) {
        let data = legend_data[i]
        tBody.append(`
            <tr>
                <td class="name">${data.name}</td>
                <td class="color" style="background-color: ${data.color}">&nbsp;</td>
            </tr>
        `)
    }
    
    return table
}

function build_desktop_panel()
{
    var panel = jQuery("#left_panel").addClass("collapse show")

    // Header
    var header = jQuery(`
        <header>
            <h2>Unity 2020</h2>
            <h3>Outreach Areas</h3>
        </header>
    `).appendTo(panel)
    
    var content = jQuery(`<div class="panel-content"></div>`)
        .appendTo(panel)
    
    content.append("<p>Welcome volunteers! Use this map to find areas near you that may have the highest possibility of supporting the Unity2020 message, based on past voting data for 3rd-Party candidates and non-voters.</p>")

    content.append(`
        <section class="card">
            <div class="card-body">
                <p class="card-text">
                    <b>Step 1:</b> Zoom to your location or search for your city
                </p>
            </div>
        </section>
    `)

    // Geocoder
    content.append(`<div id="custom-map-controls></div>`)



    // Legend
    jQuery(`
        <section class="card">
            <div class="list-group list-group-flush">
                <p class="list-group-item">
                    <b>Step 2:</b> Look for PURPLE areas - these are the areas that our team thinks is most likely to be open to our message. ORANGE and YELLOW regions are less likely to be interested. GREEN regions are unlikely, and GREY regions are very unlikely.
                </p>
            </div>
        </section>
    `)
        .find(".list-group")
        .append(build_legend().addClass("list-group-item"))
        .end()
        .appendTo(content)
    

    // Save
    jQuery(`
        <section class="card">
            <div class="list-group list-group-flush">
                <p class="list-group-item">
                    <b>Step 3:</b> Print this map here if you like:
                </p>
                <p class="list-group-item">
                    
                </p>
            </div>
        </section >
    `)
        .find(".list-group-item:last-child")
        .append(
            jQuery(`<button class="btn btn-light print-save">Print / Save Map</button>`)
                .on('click', function() {
                    var modeToUse = L.control.browserPrint.mode.auto()
                    map.printControl.print(modeToUse)
                })
        )
        .end()
        .appendTo(content)
    

    content.append(`
        <section class="card">
            <div class="card-body">
                <p class="card-text">
                    <b>Step 4:</b> Outreach in these areas!
                </p>
            </div>
        </section>
    `)


    // Footer
    var footer = jQuery('<footer></footer>').appendTo(panel)

    footer.append(`
        <p>
            Data Sources: <br />
            <a href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/VOQCHQ">
                Harvard Dataverse
            </a> <br />
            <a href="maps.stamen.com">maps.stamen.com</a>
        </p>
    `)
    
    jQuery("#mapcontainer .leaflet-control-container")
        .append(`
            <a class="toggle-sidebar" data-toggle="collapse" href="#left_panel" role="button" aria-expanded="false" aria-controls="left_panel">
                &nbsp;
            </a>
        `)
    
}


function build_mobile_panel()
{
    var panel = jQuery("#bottom_panel")

    panel.append(build_legend())
    
}
