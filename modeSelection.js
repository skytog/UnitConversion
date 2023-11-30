// modeSelection.js

function modeSelection() {
    // Get the selected mode from the dropdown
    var selectedMode = document.getElementById('mode-selection').value;

    // Get the unit selection and target unit selection elements
    var unitSelectionElement = document.getElementById('unit-selection');
    var targetUnitSelectionElement = document.getElementById('target-unit-selection');

    // Based on the selected mode, perform the necessary actions
    if (selectedMode === 'conversion') {
        // If Conversion Mode is selected, enable the unit selection dropdown
        unitSelectionElement.disabled = false;
        targetUnitSelectionElement.disabled = false;
        document.getElementById('conversion-table').style.display = 'none';
        // If Conversion Mode is selected, enable the unit selection dropdown
        document.getElementById('target-unit-selection').disabled = false;
    } else if (selectedMode === 'table') {
        // If Table Display Mode is selected, disable the target unit selection dropdown
        unitSelectionElement.disabled = false;
        targetUnitSelectionElement.disabled = true;
        document.getElementById('conversion-table').style.display = 'table'; // Show the conversion table
        tableDisplay(unitSelectionElement.value); 
        // If Table Display Mode is selected, disable the unit selection dropdown
        document.getElementById('unit-selection').disabled = false;
        document.getElementById('target-unit-selection').disabled = true;
    }

    // Clear the conversion result or table
    document.getElementById('conversion-result').innerHTML = '';

    // Call the unitSystemSelection function to update the unit system dropdown
    unitSystemSelection();
}
