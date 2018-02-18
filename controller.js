// get ag-Grid to create an Angular module and register the ag-Grid directive
agGrid.initialiseAgGridWithAngular1(angular);

// create your module with ag-Grid as a dependency
var app = angular.module("myApp", ["agGrid"]);
app.controller("myCtrl", function($scope) {
    // נוסיף פפסי זברה, סדרן עמודות, תפריט כלים עם מחיקה, בריחה של מספר שורות וכו
    // שורת סיכום קבוה למטה, עריכה מתאפשרת רק אחרי לחיצה על כפתור עריכה בתפריט כלים
    var columnDefs = [
        {headerName: "שם שדרה", field: "convoyName"}, // סתם סטרינג בעברית
        {headerName: "תאריך", field: "date"}, // , לבדוק פורמטר, תאריך
        {headerName: "שדרה ריקה", field: "isEmpty"}, //אייקון
        {headerName: "סטטוס שדרה", field: "status"}, // איחוד כותרת בעמודות
        {headerName: "הערות", field: "comments"}, // לוודא עריכה
        {headerName: "הערות אנגלית", field: "comments2"}, // לוודא עריכה
        {headerName: "מספר שדרה", field: "convoyNum"}, // נעול לעריכה וסינון לפי קטן מ, גדול מ..
        {headerName: "מגניב", field: "isCool"} // לעשות סטיילר,עם מגניב ירוק אם לא מגניב אז אדום וסינון עם כומבו בוקס של האופציות         
    
    ];

    var rowData = [
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status: "איחוד עמודות", comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב", ituran: "1234567", driverName: "ים שרגיל"},
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status: "איחוד עמודות", comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב", ituran: "9638527", driverName: "טל איטח"},
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status: "איחוד עמודות", comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב", ituran: "2583694", driverName: "סוניה יוסף"},
        {convoyName: "השדרה הטובה בעולם", date: new Date(), isEmpty: true, status: "איחוד עמודות", comments: "תערוך אותי!", comments2: "Edit me!", convoyNum: 22, isCool: "מגניב", ituran: "4956325", driverName: "ליאור הירש"},
   ];

    $scope.mainGridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        enableRtl : true,
        rowSelection : "single",
        onSelectionChanged : onMainGridRowSelected
    };

    function onMainGridRowSelected() {
        $scope.secondGridOption.api.setRowData($scope.mainGridOptions.api.getSelectedRows());
    }

    var secondColumnDefs = [
        {headerName: "צ' רכב", field: "ituran"},
        {headerName: "שם נהג", field: "driverName"}
    ];

    $scope.secondGridOption = {
        columnDefs: secondColumnDefs,
        rowData: [],
        enableRtl : true
    }
});
