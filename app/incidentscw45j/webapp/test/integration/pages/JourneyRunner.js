sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ns/incidentscw45j/test/integration/pages/IncidentsList.gen",
	"ns/incidentscw45j/test/integration/pages/IncidentsObjectPage.gen"
], function (JourneyRunner, IncidentsListGenerated, IncidentsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ns/incidentscw45j') + '/test/flpSandbox.html#nsincidentscw45j-tile',
        pages: {
			onTheIncidentsListGenerated: IncidentsListGenerated,
			onTheIncidentsObjectPageGenerated: IncidentsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

