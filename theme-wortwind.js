// =====================================================
// Thema "Wortwind-Crew" – eigene Figuren, austauschbar.
// Alles, was das Aussehen der Abenteuerwelt bestimmt, steht hier.
// =====================================================
(function(){
const O="#1e1b4b";          // Umrisslinie
const SW='stroke="'+O+'" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"';

// ---------- Käpt'n Blitz ----------
function blitz(){return `
<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Käpt'n Blitz">
  <!-- Schal flattert -->
  <path d="M118 138 C150 130 168 112 186 96 C178 122 162 140 132 152 Z" fill="#ef4444" ${SW}/>
  <path d="M150 124 C162 118 172 110 180 102" fill="none" stroke="#b91c1c" stroke-width="3"/>
  <!-- Körper / Jacke -->
  <path d="M46 228 C46 178 64 150 100 146 C136 150 154 178 154 228 Z" fill="#9a5b2e" ${SW}/>
  <path d="M84 148 L100 176 L116 148 Z" fill="#f8fafc" ${SW}/>
  <path d="M74 152 L88 190 L64 186 Z" fill="#7c4320" ${SW}/>
  <path d="M126 152 L112 190 L136 186 Z" fill="#7c4320" ${SW}/>
  <!-- Blitz-Abzeichen -->
  <circle cx="128" cy="205" r="13" fill="#1e3a8a" ${SW}/>
  <path d="M131 195 L122 207 L129 207 L125 216 L135 203 L128 203 Z" fill="#facc15" stroke="${O}" stroke-width="1.5" stroke-linejoin="round"/>
  <!-- Arm mit Daumen hoch -->
  <path d="M52 186 C34 176 26 150 32 128" fill="none" stroke="${O}" stroke-width="22" stroke-linecap="round"/>
  <path d="M52 186 C34 176 26 150 32 128" fill="none" stroke="#9a5b2e" stroke-width="15" stroke-linecap="round"/>
  <rect x="18" y="102" width="28" height="26" rx="9" fill="#f2c49b" ${SW}/>
  <path d="M30 104 C28 94 30 86 36 84 C40 84 41 90 39 104" fill="#f2c49b" ${SW}/>
  <path d="M22 112 L42 112 M22 119 L42 119" stroke="${O}" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Hals -->
  <rect x="88" y="126" width="24" height="22" rx="6" fill="#e3ad7f" ${SW}/>
  <!-- Kopf -->
  <ellipse cx="60" cy="88" rx="9" ry="12" fill="#f2c49b" ${SW}/>
  <ellipse cx="140" cy="88" rx="9" ry="12" fill="#f2c49b" ${SW}/>
  <ellipse cx="100" cy="86" rx="40" ry="44" fill="#f2c49b" ${SW}/>
  <!-- Haare -->
  <path d="M62 66 L56 46 L72 56 L72 38 L86 52 L94 34 L104 50 L116 34 L120 54 L136 42 L134 62 Z" fill="#5b3a1e" ${SW}/>
  <!-- Fliegermütze -->
  <path d="M60 68 C60 34 140 34 140 68 C128 58 72 58 60 68 Z" fill="#7c4320" ${SW}/>
  <!-- Fliegerbrille auf der Stirn -->
  <path d="M58 66 C80 58 120 58 142 66" fill="none" stroke="${O}" stroke-width="9" stroke-linecap="round"/>
  <path d="M58 66 C80 58 120 58 142 66" fill="none" stroke="#334155" stroke-width="5" stroke-linecap="round"/>
  <circle cx="84" cy="60" r="13" fill="#7dd3fc" ${SW}/>
  <circle cx="116" cy="60" r="13" fill="#7dd3fc" ${SW}/>
  <path d="M78 55 L84 51 M110 55 L116 51" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
  <!-- Augenbrauen -->
  <path d="M76 78 L92 75 M108 75 L124 78" stroke="${O}" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Augen -->
  <ellipse cx="85" cy="90" rx="8" ry="9.5" fill="#fff" ${SW}/>
  <ellipse cx="115" cy="90" rx="8" ry="9.5" fill="#fff" ${SW}/>
  <circle cx="87" cy="91" r="4.5" fill="${O}"/><circle cx="117" cy="91" r="4.5" fill="${O}"/>
  <circle cx="88.5" cy="89" r="1.5" fill="#fff"/><circle cx="118.5" cy="89" r="1.5" fill="#fff"/>
  <!-- Wangen -->
  <ellipse cx="72" cy="106" rx="7" ry="4" fill="#f9a8a8" opacity=".7"/>
  <ellipse cx="128" cy="106" rx="7" ry="4" fill="#f9a8a8" opacity=".7"/>
  <!-- Grinsen -->
  <path d="M78 106 C86 128 114 128 122 106 Z" fill="#7f1d1d" ${SW}/>
  <path d="M82 108 L118 108 L116 114 L84 114 Z" fill="#fff"/>
  <path d="M90 121 C96 117 104 117 110 121" fill="#f87171"/>
  <!-- Nase -->
  <path d="M98 95 C96 100 98 102 103 101" fill="none" stroke="${O}" stroke-width="2.5" stroke-linecap="round"/>
</svg>`}

// ---------- Pixel (Roboter, Gesicht wechselbar) ----------
// face: "happy" | "calm" | "think" | "wow"
function pixel(face){face=face||"happy";
const faces={
  happy:`<path d="M80 98 Q88 88 96 98" fill="none" stroke="#5eead4" stroke-width="5" stroke-linecap="round"/>
         <path d="M104 98 Q112 88 120 98" fill="none" stroke="#5eead4" stroke-width="5" stroke-linecap="round"/>
         <path d="M86 112 Q100 126 114 112" fill="none" stroke="#5eead4" stroke-width="5" stroke-linecap="round"/>`,
  calm:`<circle cx="88" cy="98" r="5" fill="#5eead4"/><circle cx="112" cy="98" r="5" fill="#5eead4"/>
        <path d="M90 114 Q100 120 110 114" fill="none" stroke="#5eead4" stroke-width="5" stroke-linecap="round"/>
        <path d="M120 84 l4 -6 l4 6 l-4 6 z" fill="#fde047"/>`,
  think:`<circle cx="88" cy="98" r="5" fill="#5eead4"/><path d="M106 98 L118 98" stroke="#5eead4" stroke-width="5" stroke-linecap="round"/>
         <path d="M90 116 L110 112" stroke="#5eead4" stroke-width="5" stroke-linecap="round"/>`,
  wow:`<path d="M82 92 L88 100 L94 92 M106 92 L112 100 L118 92" fill="none" stroke="#fde047" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
       <ellipse cx="100" cy="116" rx="8" ry="7" fill="#5eead4"/>`
};
return `
<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pixel">
  <ellipse cx="100" cy="214" rx="46" ry="9" fill="#5eead4" opacity=".35"/>
  <ellipse cx="100" cy="214" rx="26" ry="5" fill="#5eead4" opacity=".5"/>
  <!-- Propeller -->
  <rect x="96" y="30" width="8" height="18" rx="3" fill="#94a3b8" ${SW}/>
  <path d="M100 30 C80 22 62 24 56 30 C62 36 80 36 100 30 Z" fill="#f59e0b" ${SW}/>
  <path d="M100 30 C120 22 138 24 144 30 C138 36 120 36 100 30 Z" fill="#f59e0b" ${SW}/>
  <circle cx="100" cy="30" r="5" fill="#ef4444" ${SW}/>
  <!-- Ärmchen -->
  <path d="M44 120 C26 124 22 140 30 150" fill="none" stroke="${O}" stroke-width="12" stroke-linecap="round"/>
  <path d="M44 120 C26 124 22 140 30 150" fill="none" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/>
  <circle cx="30" cy="152" r="9" fill="#2dd4bf" ${SW}/>
  <path d="M156 120 C174 112 178 96 172 84" fill="none" stroke="${O}" stroke-width="12" stroke-linecap="round"/>
  <path d="M156 120 C174 112 178 96 172 84" fill="none" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/>
  <circle cx="172" cy="80" r="9" fill="#2dd4bf" ${SW}/>
  <!-- Körper -->
  <path d="M40 104 C40 62 70 46 100 46 C130 46 160 62 160 104 C160 156 134 186 100 186 C66 186 40 156 40 104 Z" fill="#f8fafc" ${SW}/>
  <path d="M52 140 C62 170 82 180 100 180 C118 180 138 170 148 140 C136 156 120 162 100 162 C80 162 64 156 52 140 Z" fill="#e2e8f0"/>
  <!-- Bildschirm -->
  <rect x="62" y="72" width="76" height="66" rx="18" fill="#0f172a" ${SW}/>
  <rect x="68" y="78" width="20" height="6" rx="3" fill="#334155"/>
  ${faces[face]||faces.happy}
  <!-- Bauchlicht -->
  <circle cx="100" cy="160" r="7" fill="#2dd4bf" ${SW}/>
  <circle cx="98" cy="158" r="2" fill="#fff"/>
</svg>`}

// ---------- Doc Syntax (Papagei) ----------
function syntax(){return `
<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Doc Syntax">
  <!-- Sitzstange -->
  <rect x="24" y="200" width="152" height="12" rx="6" fill="#a16207" ${SW}/>
  <!-- Schwanzfedern -->
  <path d="M104 176 L92 226 L108 214 L114 228 L122 178 Z" fill="#3b82f6" ${SW}/>
  <path d="M112 178 L128 222 L132 206 L144 214 L128 172 Z" fill="#ef4444" ${SW}/>
  <!-- Körper -->
  <path d="M66 130 C60 92 80 70 104 70 C132 70 146 98 140 140 C136 174 124 196 104 198 C82 198 70 168 66 130 Z" fill="#22c55e" ${SW}/>
  <path d="M84 132 C84 112 92 102 104 102 C118 102 124 116 122 140 C120 168 112 186 102 186 C90 186 84 160 84 132 Z" fill="#fde047" stroke="${O}" stroke-width="2.5"/>
  <!-- Füße -->
  <path d="M90 196 L86 206 M96 196 L96 207 M110 196 L110 207 M116 196 L120 206" stroke="#f97316" stroke-width="5" stroke-linecap="round"/>
  <!-- Buch -->
  <path d="M44 150 L84 140 L88 178 L48 188 Z" fill="#7c3aed" ${SW}/>
  <path d="M50 152 L80 145" stroke="#fde047" stroke-width="3"/>
  <text x="62" y="172" font-family="Georgia,serif" font-size="13" font-weight="700" fill="#fde047" transform="rotate(-13 62 172)">ABC</text>
  <!-- Flügel -->
  <path d="M132 104 C160 116 162 156 140 182 C134 162 126 140 124 118 Z" fill="#16a34a" ${SW}/>
  <path d="M138 128 C146 138 148 150 146 160 M132 132 C136 146 138 156 136 168" fill="none" stroke="#15803d" stroke-width="3" stroke-linecap="round"/>
  <path d="M66 122 C46 132 40 150 52 160 C60 150 70 140 76 132 Z" fill="#16a34a" ${SW}/>
  <!-- Kopf -->
  <circle cx="104" cy="66" r="36" fill="#22c55e" ${SW}/>
  <path d="M86 40 C92 24 112 22 118 34 C110 30 98 32 86 40 Z" fill="#16a34a" ${SW}/>
  <!-- Doktorhut -->
  <path d="M70 30 L106 16 L142 30 L106 44 Z" fill="#1e293b" ${SW}/>
  <path d="M86 38 L86 48 C96 54 116 54 126 48 L126 38" fill="#1e293b" ${SW}/>
  <path d="M106 30 L140 36 L140 54" fill="none" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
  <circle cx="140" cy="58" r="5" fill="#facc15" ${SW}/>
  <!-- Wange -->
  <ellipse cx="96" cy="78" rx="14" ry="10" fill="#f1f5f9" stroke="${O}" stroke-width="2"/>
  <!-- Schnabel -->
  <path d="M118 64 C140 60 150 76 140 96 C136 86 128 82 118 82 Z" fill="#fb923c" ${SW}/>
  <path d="M118 82 C126 82 132 86 134 92 C128 94 122 92 118 88 Z" fill="#c2410c" ${SW}/>
  <!-- Brille -->
  <circle cx="92" cy="60" r="11" fill="#fff" ${SW}/>
  <circle cx="116" cy="58" r="9" fill="#fff" ${SW}/>
  <path d="M103 59 L107 58" stroke="${O}" stroke-width="3"/>
  <circle cx="94" cy="61" r="4.5" fill="${O}"/><circle cx="117" cy="59" r="4" fill="${O}"/>
  <circle cx="95.5" cy="59.5" r="1.5" fill="#fff"/>
  <!-- Augenbraue (wichtigtuerisch) -->
  <path d="M82 44 L100 48" stroke="${O}" stroke-width="4" stroke-linecap="round"/>
</svg>`}

// ---------- Rio (Navigatorin) ----------
function rio(){return `
<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rio">
  <!-- Drohne mit Karten-Hologramm -->
  <g transform="translate(-14 -8)">
  <path d="M150 52 L128 112 L190 112 Z" fill="#38bdf8" opacity=".25"/>
  <rect x="138" y="96" width="44" height="22" rx="4" fill="#0ea5e9" opacity=".35" stroke="#38bdf8" stroke-width="1.5"/>
  <path d="M144 112 L154 104 L164 108 L176 100" fill="none" stroke="#e0f2fe" stroke-width="2" stroke-dasharray="3 3"/>
  <circle cx="176" cy="100" r="3" fill="#facc15"/>
  <rect x="134" y="38" width="32" height="14" rx="6" fill="#64748b" ${SW}/>
  <path d="M130 34 L118 34 M170 34 L182 34" stroke="${O}" stroke-width="3" stroke-linecap="round"/>
  <ellipse cx="118" cy="32" rx="9" ry="3" fill="#cbd5e1" stroke="${O}" stroke-width="2"/>
  <ellipse cx="182" cy="32" rx="9" ry="3" fill="#cbd5e1" stroke="${O}" stroke-width="2"/>
  <circle cx="150" cy="52" r="4" fill="#38bdf8" ${SW}/>
  </g>
  <!-- Skateboard -->
  <path d="M14 196 L54 120" stroke="${O}" stroke-width="16" stroke-linecap="round"/>
  <path d="M14 196 L54 120" stroke="#8b5cf6" stroke-width="10" stroke-linecap="round"/>
  <circle cx="14" cy="178" r="6" fill="#facc15" ${SW}/><circle cx="40" cy="128" r="6" fill="#facc15" ${SW}/>
  <!-- Hoodie -->
  <path d="M48 228 C48 180 66 152 100 148 C134 152 152 180 152 228 Z" fill="#f97316" ${SW}/>
  <path d="M74 200 L126 200 L122 222 L78 222 Z" fill="#ea580c" ${SW}/>
  <path d="M92 156 L94 182 M108 156 L106 182" stroke="#f8fafc" stroke-width="3" stroke-linecap="round"/>
  <circle cx="94" cy="184" r="3" fill="#f8fafc"/><circle cx="106" cy="184" r="3" fill="#f8fafc"/>
  <!-- Arm hält Board -->
  <path d="M58 176 C46 168 44 152 50 140" fill="none" stroke="${O}" stroke-width="20" stroke-linecap="round"/>
  <path d="M58 176 C46 168 44 152 50 140" fill="none" stroke="#f97316" stroke-width="13" stroke-linecap="round"/>
  <circle cx="50" cy="138" r="9" fill="#a0673f" ${SW}/>
  <!-- Hals -->
  <rect x="90" y="128" width="20" height="20" rx="6" fill="#8d5733" ${SW}/>
  <!-- Zöpfe -->
  <path d="M64 82 C50 100 52 128 60 146" fill="none" stroke="${O}" stroke-width="14" stroke-linecap="round"/>
  <path d="M64 82 C50 100 52 128 60 146" fill="none" stroke="#2b1a10" stroke-width="8" stroke-linecap="round" stroke-dasharray="7 4"/>
  <path d="M136 82 C150 100 148 128 140 146" fill="none" stroke="${O}" stroke-width="14" stroke-linecap="round"/>
  <path d="M136 82 C150 100 148 128 140 146" fill="none" stroke="#2b1a10" stroke-width="8" stroke-linecap="round" stroke-dasharray="7 4"/>
  <circle cx="60" cy="148" r="5" fill="#2dd4bf" ${SW}/><circle cx="140" cy="148" r="5" fill="#2dd4bf" ${SW}/>
  <!-- Kopf -->
  <ellipse cx="100" cy="90" rx="38" ry="42" fill="#a0673f" ${SW}/>
  <path d="M64 80 C66 54 84 44 100 44 C120 44 136 56 136 80 C122 68 110 64 100 64 C88 64 76 70 64 80 Z" fill="#2b1a10" ${SW}/>
  <!-- Kappe (nach hinten) -->
  <path d="M66 66 C68 40 132 40 134 66 C120 58 80 58 66 66 Z" fill="#2563eb" ${SW}/>
  <path d="M130 60 C146 58 156 64 158 70 C148 72 138 70 132 66 Z" fill="#1d4ed8" ${SW}/>
  <circle cx="100" cy="44" r="4" fill="#facc15" ${SW}/>
  <!-- Gesicht -->
  <path d="M78 84 Q86 80 94 84 M106 84 Q114 80 122 84" fill="none" stroke="${O}" stroke-width="3.5" stroke-linecap="round"/>
  <ellipse cx="86" cy="96" rx="6.5" ry="8" fill="#fff" ${SW}/><ellipse cx="114" cy="96" rx="6.5" ry="8" fill="#fff" ${SW}/>
  <circle cx="87" cy="97" r="4" fill="${O}"/><circle cx="115" cy="97" r="4" fill="${O}"/>
  <circle cx="88.3" cy="95.5" r="1.3" fill="#fff"/><circle cx="116.3" cy="95.5" r="1.3" fill="#fff"/>
  <path d="M98 102 C97 106 99 108 103 107" fill="none" stroke="${O}" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M88 116 C96 122 108 120 114 112" fill="none" stroke="${O}" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="78" cy="110" r="2" fill="#5b3216"/><circle cx="74" cy="106" r="1.6" fill="#5b3216"/><circle cx="124" cy="108" r="2" fill="#5b3216"/>
</svg>`}

// ---------- Luftschiff Wortwind (Ausbaustufe 1-3) ----------
function ship(stage){stage=stage||1;return `
<svg viewBox="0 -16 300 236" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Luftschiff Wortwind, Stufe ${stage}">
  ${stage>=3?`<!-- Turbo-Flammen -->
  <path d="M40 150 C18 144 8 150 0 142 C10 156 22 160 40 162 Z" fill="#f97316"/>
  <path d="M40 152 C26 150 18 154 10 150 C20 158 28 160 40 160 Z" fill="#fde047"/>`:""}
  <!-- Ballon -->
  <ellipse cx="150" cy="58" rx="112" ry="46" fill="${stage>=2?"#8b5cf6":"#a8a29e"}" ${SW}/>
  <path d="M60 58 C100 46 200 46 240 58" fill="none" stroke="${O}" stroke-width="2.5" opacity=".6"/>
  <path d="M74 36 C110 26 190 26 226 36" fill="none" stroke="${O}" stroke-width="2.5" opacity=".6"/>
  <path d="M74 80 C110 90 190 90 226 80" fill="none" stroke="${O}" stroke-width="2.5" opacity=".6"/>
  ${stage===1?`<rect x="100" y="40" width="22" height="16" fill="#d6d3d1" stroke="${O}" stroke-width="2" transform="rotate(-8 111 48)"/>
  <rect x="176" y="62" width="18" height="14" fill="#e7e5e4" stroke="${O}" stroke-width="2" transform="rotate(6 185 69)"/>`:""}
  ${stage>=2?`<path d="M150 22 L136 50 L148 50 L140 76 L164 42 L152 42 L160 22 Z" fill="#facc15" ${SW}/>`:
  `<text x="150" y="66" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="800" fill="${O}">WORTWIND</text>`}
  <!-- Seile -->
  <path d="M78 96 L96 130 M222 96 L204 130 M130 104 L132 130 M170 104 L168 130" stroke="${O}" stroke-width="3"/>
  ${stage>=2?`<!-- Flügel-Segel -->
  <path d="M86 140 C60 112 30 112 14 118 C30 128 44 140 60 156 Z" fill="#f8fafc" ${SW}/>
  <path d="M214 140 C240 112 270 112 286 118 C270 128 256 140 240 156 Z" fill="#f8fafc" ${SW}/>
  <path d="M40 124 L64 146 M262 124 L238 146" stroke="#94a3b8" stroke-width="2.5"/>`:""}
  <!-- Rumpf -->
  <path d="M56 130 L244 130 C240 166 214 186 150 186 C86 186 60 166 56 130 Z" fill="#b45309" ${SW}/>
  <path d="M64 146 L236 146 M76 164 L224 164" stroke="#92400e" stroke-width="3"/>
  <circle cx="110" cy="152" r="7" fill="#7dd3fc" ${SW}/><circle cx="150" cy="154" r="7" fill="#7dd3fc" ${SW}/><circle cx="190" cy="152" r="7" fill="#7dd3fc" ${SW}/>
  <!-- Propeller hinten -->
  <circle cx="44" cy="150" r="6" fill="#64748b" ${SW}/>
  <path d="M44 150 L38 128 M44 150 L50 172" stroke="${O}" stroke-width="7" stroke-linecap="round"/>
  <path d="M44 150 L38 128 M44 150 L50 172" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
  ${stage>=3?`<!-- Konfetti-Kanone -->
  <rect x="226" y="112" width="34" height="14" rx="6" fill="#ec4899" transform="rotate(-20 243 119)" ${SW}/>
  <circle cx="270" cy="96" r="4" fill="#facc15"/><circle cx="282" cy="86" r="3.5" fill="#22c55e"/><circle cx="276" cy="78" r="3" fill="#3b82f6"/>
  <rect x="286" y="96" width="6" height="6" fill="#ef4444" transform="rotate(30 289 99)"/><rect x="268" y="70" width="5" height="5" fill="#f97316" transform="rotate(15 270 72)"/>
  <!-- Flagge -->
  <path d="M150 12 L150 -2" stroke="${O}" stroke-width="3"/>
  <path d="M150 -2 L174 4 L150 10 Z" fill="#ef4444" ${SW}/>`:""}
</svg>`}

// ---------- Spezialkraft-Abzeichen ----------
function badge(icon,color,locked){return `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 4 L90 26 L90 74 L50 96 L10 74 L10 26 Z" fill="${locked?"#cbd5e1":color}" ${SW}/>
  <path d="M50 14 L81 31 L81 69 L50 86 L19 69 L19 31 Z" fill="${locked?"#e2e8f0":"#fff"}" opacity="${locked?1:.25}"/>
  <text x="50" y="62" text-anchor="middle" font-size="34" ${locked?'opacity=".35" style="filter:grayscale(1)"':""}>${locked?"🔒":icon}</text>
</svg>`}

// ---------- Inseln (in Buch-Reihenfolge) ----------
const ISLANDS=[
  {unit:"Hi from America",      name:"Hafen Hello",       icon:"⚓", top:"#86efac"},
  {unit:"Unit 1",               name:"Skyline-Insel",     icon:"🏙️", top:"#93c5fd"},
  {unit:"Unit 2",               name:"Zwillingsinseln",   icon:"🌴", top:"#fde68a"},
  {unit:"Canada – not just colder. Cooler.", name:"Ahorn-Gletscher", icon:"🍁", top:"#e0f2fe"},
  {unit:"Unit 3",               name:"Werkstatt-Insel",   icon:"🔧", top:"#fdba74"},
  {unit:"Islands in the sun",   name:"Sonnenriff",        icon:"☀️", top:"#fef08a"},
  {unit:"Unit 4",               name:"Sturmbucht",        icon:"🌀", top:"#a5b4fc"}
];
// progress: Array mit 0..1 pro Insel; shipAt: Index der Insel, an der das Schiff steht
function map(progress,shipAt,shipStage){
  progress=progress||ISLANDS.map(()=>0);shipAt=shipAt||0;
  const W=360,H=640,pos=[[90,560],[260,480],[100,400],[255,320],[95,240],[255,160],[160,72]];
  let path="M"+pos.map(p=>p.join(" ")).join(" L");
  const isl=ISLANDS.map((s,i)=>{const [x,y]=pos[i],p=Math.max(0,Math.min(1,progress[i]||0)),done=p>=1;
    const C=2*Math.PI*30,dash=(C*p).toFixed(1)+" "+C.toFixed(1);
    return `<g transform="translate(${x} ${y})">
      <path d="M-46 4 C-40 34 -14 52 0 58 C14 52 40 34 46 4 Z" fill="#a16207" ${SW}/>
      <path d="M-30 30 L-24 44 M0 40 L0 56 M26 28 L20 42" stroke="#78350f" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="0" cy="4" rx="48" ry="16" fill="${s.top}" ${SW}/>
      <circle cx="0" cy="-22" r="30" fill="#fff" stroke="#e2e8f0" stroke-width="6"/>
      <circle cx="0" cy="-22" r="30" fill="none" stroke="${done?"#22c55e":"#f59e0b"}" stroke-width="6" stroke-dasharray="${dash}" transform="rotate(-90 0 -22)" stroke-linecap="round"/>
      <text x="0" y="-12" text-anchor="middle" font-size="28">${s.icon}</text>
      ${done?`<text x="24" y="-44" font-size="20">⭐</text>`:""}
      <rect x="-58" y="24" width="116" height="22" rx="11" fill="#1e1b4b" opacity=".85"/>
      <text x="0" y="40" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#fff">${s.name} · ${Math.round(p*100)}%</text>
    </g>`}).join("");
  const [sx,sy]=pos[shipAt];
  const cloud=(x,y,s)=>`<g transform="translate(${x} ${y}) scale(${s})" opacity=".9"><ellipse cx="0" cy="0" rx="30" ry="12" fill="#fff"/><ellipse cx="-14" cy="-8" rx="14" ry="12" fill="#fff"/><ellipse cx="10" cy="-12" rx="16" ry="14" fill="#fff"/></g>`;
  return `
<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Inselkarte">
  <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e3a8a"/><stop offset=".55" stop-color="#6366f1"/><stop offset="1" stop-color="#f9a8d4"/></linearGradient></defs>
  <rect width="${W}" height="${H}" rx="20" fill="url(#sky)"/>
  <circle cx="300" cy="40" r="2" fill="#fff"/><circle cx="40" cy="60" r="1.5" fill="#fff"/><circle cx="210" cy="24" r="1.5" fill="#fff"/><circle cx="330" cy="110" r="1.2" fill="#fff"/>
  ${cloud(40,140,1)}${cloud(320,240,.8)}${cloud(30,330,.7)}${cloud(330,420,1)}${cloud(180,600,.9)}
  <path d="${path}" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="2 12" stroke-linecap="round" opacity=".8"/>
  ${isl}
  <g transform="translate(${sx<180?sx+50:sx-122} ${sy-34}) scale(.24)">${ship(shipStage||1).replace(/<\/?svg[^>]*>/g,"")}</g>
</svg>`}

// ---------- Sprüche der Crew ----------
const LINES={
  blitz:{ // Motivation
    start:["Leinen los! Heute holen wir uns ein paar Wörter zurück! ⚡","Crew, auf Position! Das wird ein Wortwind-Tag!","Bereit? Ich bin sowas von bereit!"],
    streak:["Drei richtig am Stück? DAS ist Wortwind-Niveau! ⚡","Unaufhaltsam! Die Turbine glüht schon!","Wer hat dir das beigebracht?! Ach ja – du selbst!"],
    done:["Mission erledigt! Ich bin stolz auf dich, Crewmitglied!","Volle Wort-Energie getankt! ⚡","Das war heldenhaft. Ehrlich."]
  },
  pixel:{ // Hilfe bei Fehlern
    oops:["Kein Ding. Wir schauen's uns zusammen an. 🙂","Fehler sind nur Daten. Und Daten machen schlau.","Fast! Nur eine Kleinigkeit war anders."],
    calm:["Ganz ruhig. Wir haben alle Zeit der Welt.","Ich speichere dir das Wort für später ab. Es kommt nochmal."]
  },
  syntax:{ // Grammatik
    intro:["Ahem! Eine Regel, junger Freund – und zwar eine gute.","Grammatik ist wie Gymnastik fürs Gehirn. Krächz!","Aufgepasst, das kommt im Test garantiert dran!"]
  },
  rio:{ // Orientierung
    plan:["Test bald? Ich plan dir die Route. 🗺️","Wähl die Wörter aus – ich bau dir daraus ein Lernset.","Kurs gesetzt! Heute stehen ein paar Wörter an."]
  }
};

window.THEME={id:"wortwind",name:"Die Wortwind-Crew",ship:"Wortwind",
  crew:{
    blitz:{name:"Käpt'n Blitz",role:"Motivation",svg:blitz},
    pixel:{name:"Pixel",role:"Hilfe bei Fehlern",svg:pixel},
    syntax:{name:"Doc Syntax",role:"Grammatik",svg:syntax},
    rio:{name:"Rio",role:"Navigation & Lernsets",svg:rio}
  },
  shipSvg:ship,mapSvg:map,badge,ISLANDS,LINES};
})();
