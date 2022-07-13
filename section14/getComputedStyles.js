const li = document.querySelector("li");
const styles = getComputedStyle(li);
styles.color = "red"; //mudamos a cor do li
const h1 = document.querySelector("h1");
const compStyles = getComputedStyle(h1);
compStyles.color = "red"; //mudamos a cor do h1 (que esta no css), nesse caso é melhor que alterar de forma inline
