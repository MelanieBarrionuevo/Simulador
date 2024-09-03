function calculate() {
    const m1 = parseFloat(document.getElementById('mass1').value);
    const m2 = parseFloat(document.getElementById('mass2').value);
    const mu = parseFloat(document.getElementById('friction').value);
    const g = 9.81; // Gravitational constant

    // Validar que las masas no sean cero
    if (m1 <= 0 || m2 <= 0) {
        alert("Las masas no pueden ser cero o negativas.");
        document.getElementById('tension-result').innerText = 'Tensión: -';
        document.getElementById('acceleration-result').innerText = 'Aceleración: -';
        return;
    }

    // Calcula la aceleración
    const a = (m2 * g) / (m1 + m2);

    // Calcula la tensión
    const tension = m1 * (g - a);

    // Actualiza los resultados en la página
    document.getElementById('tension-result').innerText = 'Tensión: ' + tension.toFixed(2) + ' N';
    document.getElementById('acceleration-result').innerText = 'Aceleración: ' + a.toFixed(2) + ' m/s²';

    // Actualiza los DCL con valores calculados
    document.getElementById('dcl1').innerHTML = `
        <!-- DCL para la masa m1 -->
        <!-- Fuerza gravitatoria -->
        <line x1="80" y1="100" x2="80" y2="140" class="dcl-line" stroke="blue"></line>
        <text x="70" y="125" class="dcl-label" fill="blue">P = ${(m1 * g).toFixed(2)}</text>

        <!-- Fuerza normal -->
        <line x1="80" y1="100" x2="80" y2="60" class="dcl-line" stroke="green"></line>
        <text x="70" y="75" class="dcl-label" fill="green">N = ${(m1 * g).toFixed(2)}</text>

        <!-- Tensión -->
        <line x1="80" y1="100" x2="150" y2="100" class="dcl-line" stroke="red"></line>
        <text x="115" y="115" class="dcl-label" fill="red">T = ${tension.toFixed(2)}</text>

        <!-- Fuerza de rozamiento -->
        <line x1="80" y1="100" x2="10" y2="100" class="dcl-line" stroke="orange"></line>
        <text x="25" y="115" class="dcl-label" fill="orange">Fr = ${(mu * m1 * g).toFixed(2)}</text>

        <!-- Movimiento -->
        <line x1="80" y1="50" x2="150" y2="50" class="dcl-line" stroke="purple" marker-end="url(#arrowhead)"></line>
        <text x="115" y="45" class="dcl-label" fill="purple">mov</text>

        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="purple"></polygon>
            </marker>
        </defs>
    `;

    document.getElementById('dcl2').innerHTML = `
        <!-- DCL para la masa m2 -->
        <!-- Fuerza gravitatoria -->
        <line x1="80" y1="100" x2="80" y2="140" class="dcl-line" stroke="blue"></line>
        <text x="70" y="125" class="dcl-label" fill="blue">P = ${(m2 * g).toFixed(2)}</text>

        <!-- Tensión -->
        <line x1="80" y1="100" x2="80" y2="60" class="dcl-line" stroke="red"></line>
        <text x="70" y="75" class="dcl-label" fill="red">T = ${tension.toFixed(2)}</text>

        <!-- Movimiento -->
        <line x1="130" y1="80" x2="130" y2="110" class="dcl-line" stroke="purple" marker-end="url(#arrowhead2)"></line>
        <text x="135" y="115" class="dcl-label" fill="purple">mov</text>

        <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="purple"></polygon>
            </marker>
        </defs>
    `;
}