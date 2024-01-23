import { ColorPipe } from './color.pipe';

describe('ColorPipe', () => {
  it('create an instance', () => {
    const pipe = new ColorPipe();

    expect(pipe).toBeTruthy();
  });

  it('create return correct color by provided index', () => {
    const pipe = new ColorPipe();

    expect(pipe.transform(0)).toBe('#F49F85');
    expect(pipe.transform(1)).toBe('#AD1FEA');
    expect(pipe.transform(2)).toBe('#62BCFA');
  });
});
