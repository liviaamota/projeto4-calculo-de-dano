let attackerName = prompt('Insira o nome do atacante');
const attackPower = parseInt(prompt('Insira o poder de ataque'));
let defenderName = prompt('Insira o nome do defensor');
let healthPoints = parseInt(prompt('Insira a quantidade de pontos de vida'));
const defensePower = parseInt(prompt('Insira o poder de defesa'));
const hasShield = confirm('O defensor possui um escudo?'); 
let damage;
if (attackPower > defensePower) {
    if (hasShield) {
        damage = (attackPower - defensePower) / 2;
        alert(`${attackerName} atacou. ${defenderName} sofreu ${damage} de dano por possuir escudo. Sua vida agora é ${healthPoints - damage}.`);
    } else {
        damage = attackPower - defensePower;
        alert(`${attackerName} atacou. ${defenderName} sofreu ${damage} de dano e não possui escudo. Sua vida agora é ${healthPoints - damage}.`);
    }
} else {
    damage = 0;
    alert(`${attackerName} atacou, mas não afetou ${defenderName}. Nenhum dano causado!`);
}
healthPoints -= damage;
