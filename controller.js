// get ag-Grid to create an Angular module and register the ag-Grid directive
agGrid.initialiseAgGridWithAngular1(angular);

// create your module with ag-Grid as a dependency
var app = angular.module("myApp", ["agGrid"]);
app.controller("myCtrl", function($scope) {
    // נוסיף פפסי זברה, סדרן עמודות, תפריט כלים עם מחיקה, בריחה של מספר שורות וכו
    // שורת סיכום קבוה למטה, עריכה מתאפשרת רק אחרי לחיצה על כפתור עריכה בתפריט כלים
    var columnDefs = [
        {headerName: "שם שדרה", field: "convoyName"}, // סתם סטרינג בעברית
        {headerName: "תאריך", field: "date", type : "dateColumn",  filter: "agDateColumnFilter"}, // , לבדוק פורמטר, תאריך
        {headerName: "שדרה ריקה", field: "isEmpty", width: 100}, //אייקון
        {headerName: "סטטוס שדרה", children : [
            {headerName: "בהעמסה", field : "status_loading", suppressFilter: true, width: 90}, 
            {headerName: "בפריקה", field : "status_unloading", suppressFilter: true,  width: 90}, 
            {headerName: "בתנועה", field : "status_movement", suppressFilter: true,  width: 90} 
        ]}, // איחוד כותרת בעמודות
        {headerName: "הערות", field: "comments"}, // לוודא עריכה
        {headerName: "הערות אנגלית", field: "comments2"}, // לוודא עריכה
        {headerName: "מספר שדרה", field: "convoyNum", type: ["nonEditableColumn"], width: 100, filter: "agNumberColumnFilter"}, // נעול לעריכה וסינון לפי קטן מ, גדול מ..
        {headerName: "מגניב", field: "isCool", width: 100} // לעשות סטיילר,עם מגניב ירוק אם לא מגניב אז אדום וסינון עם כומבו בוקס של האופציות         
    
    ];

    var rowData = [
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב"}
    ];
    
    // a default column definition with properties that get applied to every column
    var defaultColDef = {
        // make every column editable
        editable: true,
        // make every column use 'text' filter by default
        filter: 'agTextColumnFilter'
    };
            
    // if we had column groups, we could provide default group items here
    var defaultColGroupDef = {};

    // define a column type (you can define as many as you like)
    var columnTypes = {
        "nonEditableColumn": {editable: false},
        "dateColumn": {filter: 'agDateColumnFilter', suppressMenu:true}
    };

    $scope.gridOptions = {
        rowData: rowData,
        enableRtl : true,
        // Columns
        columnDefs: columnDefs,
        defaultColDef: defaultColDef,
        columnTypes : columnTypes,
        floatingFilter: true,
        resizing : true,
        enableColResize: true,
        suppressDragLeaveHidesColumns: true,
        
        enableSorting: true,
        
        rowSelection : "multiple",
        rowDeselection : true,
        
        pinnedBottomRowData : [{convoyName : 1, date: "23/8/17", convoyNum: 22}]
        
        
    };
});
