// unitSystemSelection.js

/**
 * Handles the unit system selection.
 */
function unitSystemSelection() {
    // Get the selected unit system from the dropdown
    var selectedUnitSystem = document.getElementById('unit-system-selection').value;

    // Get the unit selection dropdown
    var unitSelectionDropdown = document.getElementById('unit-selection');

    // Get the target unit selection dropdown
    var targetUnitSelectionDropdown = document.getElementById('target-unit-selection');

    // Clear the unit selection dropdown
    unitSelectionDropdown.innerHTML = '';
    targetUnitSelectionDropdown.innerHTML = '';

    // Function to populate dropdown with units
    function populateDropdown(dropdown, units) {
        units.forEach(function(unit) {
            var option = document.createElement('option');
            option.value = unit;
            option.text = unit;
            dropdown.add(option);
        });
    }

    // Based on the selected unit system, populate the unit selection dropdowns with the appropriate units
    if (selectedUnitSystem === 'pressure') {
        var pressureUnits = ['kPa', 'MPa', 'PSI', 'kg/cm²', 'bar', 'mbar', 'mmHg', 'cmHg', 'inHg', 'inH₂O'];
        populateDropdown(unitSelectionDropdown, pressureUnits);
        populateDropdown(targetUnitSelectionDropdown, pressureUnits);
    } else if (selectedUnitSystem === 'flowrate') {
        var flowRateUnits = ['mL/s', 'mL/min', 'in³/min', 'in³/d', 'L/min', 'ft³/h', 'Pa·m³/s', 'E-3 Pa·m³/s'];
        populateDropdown(unitSelectionDropdown, flowRateUnits);
        populateDropdown(targetUnitSelectionDropdown, flowRateUnits);
    }

    // Call the unitSelection function to update the unit selection dropdown
    unitSelection();
}

