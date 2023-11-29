// conversion.js

function valueInput() {
    // Get the input value
    var inputValue = document.getElementById('input-value').value;

    // Get the selected unit
    var selectedUnit = document.getElementById('unit-selection').value;

    // Get the selected target unit
    var selectedTargetUnit = document.getElementById('target-unit-selection').value;

    // Call the conversion function with the input value and selected unit
    conversion(selectedUnit, selectedTargetUnit, inputValue);
}

// This function will be called when Conversion Mode is selected
function conversion(selectedUnit, selectedTargetUnit, inputValue) {
    // Get the selected unit system from the dropdown
    var selectedUnitSystem = document.getElementById('unit-system-selection').value;

    // Get the input value for conversion
    var inputValue = document.getElementById('input-value').value;

    // Define the conversion rates for pressure units
    var pconversionRates = {
        "kPa": 1, // kPa is the base unit
        "MPa": 0.001, // 1 kPa = 0.001 MPa
        "PSI": 0.145038, // 1 kPa = 0.145038 PSI
        "kg/cm²": 0.0101972, // 1 kPa = 0.0101972 kg/cm²
        "bar": 0.01, // 1 kPa = 0.01 bar
        "mbar": 10, // 1 kPa = 10 mbar
        "mmHg": 7.50062, // 1 kPa = 7.50062 mmHg
        "cmHg": 0.750062, // 1 kPa = 0.750062 cmHg
        "inHg": 0.2953, // 1 kPa = 0.2953 inHg
        "inH₂O": 4.01463 // 1 kPa = 4.01463 inH₂O
    };

    var fconversionRates = {
        "mL/s": 1, // mL/s is the base unit
        "mL/min": 60, // 1 mL/s = 60 mL/min
        "in³/min": 0.0610237, // 1 mL/s = 0.0610237 in³/min
        "in³/d": 88.057, // 1 mL/s = 88.057 in³/d
        "L/min": 0.06, // 1 mL/s = 0.06 L/min
        "ft³/h": 0.00211888, // 1 mL/s = 0.00211888 ft³/h
        "Pa·m³/s": 1, // Pa·m³/s is the base unit
        "E-3 Pa·m³/s": 1000 // 1 Pa·m³/s = 1000 E-3 Pa·m³/s
    };
    // Perform the conversion based on the selected unit and unit system
    if (selectedUnitSystem === 'pressure') {
        // Define the conversion formulas for pressure units
        var valueInBaseUnit = inputValue / pconversionRates[selectedUnit];
        //console.log(valueInBaseUnit+ ' ' + selectedUnit);

        // Display the conversion result
        //document.getElementById('conversion-result').innerHTML = result;

        // Convert the value in base unit to the selected unit
        var convertedValue = valueInBaseUnit * pconversionRates[selectedTargetUnit];
        console.log(convertedValue + 'target' + selectedTargetUnit);

        // Set the converted value to the conversion-result element
        document.getElementById('conversion-result').textContent = convertedValue + ' ' + selectedTargetUnit;
    } else if (selectedUnitSystem === 'flowrate') {
        // Define the conversion formulas for flow rate units
        var valueInBaseUnit = inputValue / fconversionRates[selectedUnit];

       // Convert the value in base unit to the selected unit
        var convertedValue = valueInBaseUnit * pconversionRates[selectedTargetUnit];
        document.getElementById('conversion-result').textContent = convertedValue + ' ' + selectedTargetUnit;
    }
}

// This function will be called when Table Display Mode is selected
function tableDisplay(selectedUnit) {
    // Get the selected unit system from the dropdown
    var selectedUnitSystem = document.getElementById('unit-system-selection').value;

    // Get the input value for conversion
    var inputValue = document.getElementById('input-value').value;

    // Display the conversion table based on the selected unit and unit system
    // The implementation of this function depends on the specific conversion formulas
    // This is just a placeholder. Replace it with the actual implementation
    if (selectedUnitSystem === 'pressure') {
        // Define the conversion formulas for pressure units
        // This is just a placeholder. Replace it with the actual conversion formulas
        var pconversionRates = {
            "kPa": 1, // kPa is the base unit
            "MPa": 0.001, // 1 kPa = 0.001 MPa
            "PSI": 0.145038, // 1 kPa = 0.145038 PSI
            "kg/cm²": 0.0101972, // 1 kPa = 0.0101972 kg/cm²
            "bar": 0.01, // 1 kPa = 0.01 bar
            "mbar": 10, // 1 kPa = 10 mbar
            "mmHg": 7.50062, // 1 kPa = 7.50062 mmHg
            "cmHg": 0.750062, // 1 kPa = 0.750062 cmHg
            "inHg": 0.2953, // 1 kPa = 0.2953 inHg
            "inH₂O": 4.01463 // 1 kPa = 4.01463 inH₂O
        };

        // Create the conversion table
        var table = '';
        for (var unit in pconversionRates) {
            var result = pconversionRates[unit] * inputValue;
            table += '<tr><td>' + unit + '</td><td>' + result + '</td></tr>';
        }

        // Display the conversion table
        document.getElementById('conversion-table').innerHTML = table;
    } else if (selectedUnitSystem === 'flowrate') {
        // Define the conversion formulas for flow rate units
        // This is just a placeholder. Replace it with the actual conversion formulas
        var fconversionRates = {
            "mL/s": 1, // mL/s is the base unit
            "mL/min": 60, // 1 mL/s = 60 mL/min
            "in³/min": 0.0610237, // 1 mL/s = 0.0610237 in³/min
            "in³/d": 88.057, // 1 mL/s = 88.057 in³/d
            "L/min": 0.06, // 1 mL/s = 0.06 L/min
            "ft³/h": 0.00211888, // 1 mL/s = 0.00211888 ft³/h
            "Pa·m³/s": 1, // Pa·m³/s is the base unit
            "E-3 Pa·m³/s": 1000 // 1 Pa·m³/s = 1000 E-3 Pa·m³/s
        };

        // Create the conversion table
        var table = '';
        for (var unit in fconversionRates) {
            var result = fconversionRates[unit] * inputValue;
            table += '<tr><td>' + unit + '</td><td>' + result + '</td></tr>';
        }

        // Display the conversion table
        document.getElementById('conversion-table').innerHTML = table;
    }
}
