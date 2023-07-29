function solution(n, control) {
    const w = control.split('w').length - 1;
    const s = control.split('s').length - 1;
    const d = control.split('d').length - 1;
    const a = control.split('a').length - 1;
    
    return n + w - s + (d * 10) - (a * 10);
}