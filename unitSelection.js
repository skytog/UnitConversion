// unitSelection.js

/**
 * Performs the necessary actions based on the selected unit, target unit, and mode.
 */
function unitSelection() {
    // Get the selected unit from the dropdown
    var selectedUnit = document.getElementById('unit-selection').value;

    // Get the selected target unit from the dropdown
    var selectedTargetUnit = document.getElementById('target-unit-selection').value;

    // Get the conversion mode from the mode selection dropdown
    var selectedMode = document.getElementById('mode-selection').value;

    // Get the input value
    var inputValue = document.getElementById('input-value').value;

    // Based on the selected unit and mode, perform the necessary actions
    if (selectedMode === 'conversion') {
        // If Conversion Mode is selected, call the conversion function with the selected unit
        conversion(selectedUnit, selectedTargetUnit, inputValue);
    } else if (selectedMode === 'table') {
        // If Table Display Mode is selected, call the tableDisplay function with the selected unit
        tableDisplay(selectedUnit);
    }
}

/*function targetUnitSelection() {
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
}*/