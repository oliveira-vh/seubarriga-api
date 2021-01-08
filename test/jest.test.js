test('devo conhecer as principais assertivas do jest', () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
});

test('Devo saber trabalhar com objetos', () => {
    const obj = { name: 'Fulano', mail: 'fulamo@mail.com' };
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'Fulano');
    expect(obj.name).toBe('Fulano');

    const obj2 = { name: 'Fulano', mail: 'fulamo@mail.com' };
    expect(obj2).toEqual(obj);
});
