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
        {headerName: "שדרה ריקה", field: "isEmpty", width: 100, type: ["nonEditableColumn"], cellRenderer: 'isConvoyEmptyRenderer'}, //אייקון
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
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב", ituran: "1234567", driverName: "ים שרגיל1"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב", ituran: "1234567", driverName: "ים שרגיל2"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב", ituran: "1234567", driverName: "ים שרגיל3"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב", ituran: "1234567", driverName: "4ים שרגיל"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב", ituran: "1234567", driverName: "5ים שרגיל"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב", ituran: "1234567", driverName: "6ים שרגיל"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב", ituran: "1234567", driverName: "7ים שרגיל"},
        
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status_loading: true, status_unloading: false, status_movement: false, comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב", ituran: "1234567", driverName: "ים שרגיל8"}
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

    $scope.mainGridOptions = {
        rowData: rowData,
        enableRtl : true,
        enableSorting: true,
        editType: 'fullRow',
        stopEditingWhenGridLosesFocus : true,
        
        // Columns
        columnDefs: columnDefs,
        defaultColDef: defaultColDef,
        columnTypes : columnTypes,
        floatingFilter: true,
        resizing : true,
        enableColResize: true,
        suppressDragLeaveHidesColumns: true,
        
        // Selects
        rowSelection : "multiple",
        rowDeselection : true,
        
        // Pagination
        pagination : true,
        paginationAutoPageSize : true,
        
        pinnedBottomRowData : [{convoyName : 1, date: "23/8/17", convoyNum: 22}],
        
        // Events
        onSelectionChanged : onMainGridRowSelected,
        
        components : {
            isConvoyEmptyRenderer : isConvoyEmptyRenderer,
        }   

    };

    function onMainGridRowSelected() {
        $scope.secondGridOption.api.setRowData($scope.mainGridOptions.api.getSelectedRows());
    }

    var secondColumnDefs = [
        {headerName: "צ' רכב", field: "ituran", width: 185},
        {headerName: "שם נהג", field: "driverName", width: 200}
    ];

    $scope.secondGridOption = {
        columnDefs: secondColumnDefs,
        rowData: [],
        enableRtl : true
    }    
    
    function isConvoyEmptyRenderer(params) {
        if (params.value) {
            return "<span class='glyphicon glyphicon-ok'></span>";
        }
        return "<span class='glyphicon glyphicon-remove'></span>";
    }
    
});
