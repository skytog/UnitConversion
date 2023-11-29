// unitSelection.js

function unitSelection() {
    // Get the selected unit from the dropdown
    var selectedUnit = document.getElementById('unit-selection').value;

    // Get the selected target unit from the dropdown
    var selectedTargetUnit = document.getElementById('target-unit-selection').value;

    // Get the conversion mode from the mode selection dropdown
    var selectedMode = document.getElementById('mode-selection').value;

    // Based on the selected unit and mode, perform the necessary actions
    if (selectedMode === 'conversion') {
        // If Conversion Mode is selected, call the conversion function with the selected unit
        conversion(selectedUnit, selectedTargetUnit);
    } else if (selectedMode === 'table') {
        // If Table Display Mode is selected, call the tableDisplay function with the selected unit
        tableDisplay(selectedUnit, selectedTargetUnit);
    }
}

function targetUnitSelection() {
    // Get the selected target unit from the dropdown
    var selectedTargetUnit = document.getElementById('target-unit-selection').value;

    // Get the conversion mode from the mode selection dropdown
    var selectedMode = document.getElementById('mode-selection').value;

    // Based on the selected target unit and mode, perform the necessary actions
    if (selectedMode === 'conversion') {
        // If Conversion Mode is selected, call the conversion function with the selected target unit
        conversion(selectedTargetUnit);
    } else if (selectedMode === 'table') {
        // If Table Display Mode is selected, call the tableDisplay function with the selected target unit
        tableDisplay(selectedTargetUnit);
    }
}

// This function will be called when Table Display Mode is selected
/*function tableDisplay(selectedUnit) {
    // Display the conversion table based on the selected unit
    // The implementation of this function depends on the specific conversion formulas
    var table = document.createElement('table');
    var units = ['kPa', 'MPa', 'PSI', 'kg/cm²', 'bar', 'mbar', 'mmHg', 'cmHg', 'inHg'];
    units.forEach(function(unit) {
        var row = document.createElement('tr');
        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        cell1.innerHTML = unit;
        cell2.innerHTML = conversionFormulas[unit](inputValue);
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    });
    document.getElementById('conversion-result').appendChild(table);
}*/
