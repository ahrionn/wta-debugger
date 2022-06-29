const max = 200
const total = 0;
let i = 100;
const list = []
let t = 0;

while (i++ < max) {
    const a = Math.trunc(i / 100)
    const b = Math.trunc((i % 100) / 10)
    const c = Math.trunc((i % 100) % 10)
    if (!list[b])
        list[b] = []
    list[b].push(i);
    t += a + c
}