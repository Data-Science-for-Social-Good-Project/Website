- [x] share from terminal
- [x] export to csv
- [x] test multiple spreadsheets cases - remove spreadsheetId dependency from client
- [x] cleanup the client, use only a create_request(body,fields,id) and build the body etc from model only 
- [x] batch request -> see how its used https://developers.google.com/drive/v3/web/manage-sharing
- [x] handle requests in better modular way 
- [x] Catch timout error and show an apropriote error rather than whole stack trace
- [x] loop in worksheet like csv, for row in wks:
- [x] compalitable with pandas
- [x] improve the authorizing - use only refresh tokens once autheticated (look at pgsheets)
- [x] add non local authorizaton
- [x] add python 3 support
- [x] add search sheets/cells by regex
- [x] fix/add formula support
- [x] add google app engin support
- [x] font, cell colorsupport
- [ ] update/sync all cells in datarange. lopp and update each cell in batch_mode
- [x] use logger
- [ ] comment ability
- [ ] add querrying for recodes ? (https://github.com/yoavaviram/python-google-spreadsheet)(https://developers.google.com/chart/interactive/docs/querylanguage)
- [x] add row/column freezing support
- [ ] add and backup option (save the whole sheet/wks)
- [x] while creating sheets we should be able to specify path in drive(http://sheetsync.readthedocs.io/en/latest/tutorial.html#folders)
- [x] specify another sheet as template while creating ssheet(http://sheetsync.readthedocs.io/en/latest/tutorial.html#templates-for-formatting)
- [ ] ability to wks[1][1] = 'test value'
- [x] add sorting (https://developers.google.com/sheets/reference/rest/v4/spreadsheets/request#sortrangerequest)
- [ ] while fetching records try to cluster and find diffrent tablular datas (https://developers.google.com/sheets/guides/values)
- [ ] make linking optional and work with the offline copy, when linking is renabled maybe sync the changes to cloud with batch update
- [ ] offline option - usefull for smaller sheets
- [ ] impove data range (protected range,)
- [ ] combine adj batch requests into 1
- [ ] save the batch requests, offline , and load later and push it?
- [x] take values upload limit by api in to consideration?
- [ ] write more examples
- [ ] write offline tests using mocks
- [ ] write tests for different authorizations (non local, using tokens etc)

## Refrences:
https://github.com/benjamind/google-sheets#rows