import { TestBed } from '@angular/core/testing';
import { UtilUiService } from './util-ui.service';

const sortData = [
  { name: 'Daniel', "upvotes": 112 },
  { name: 'John', "upvotes": 254 },
  { name: 'Jaina', "upvotes": 81 }
];

describe('UtilUiService', () => {
  let service: UtilUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct color index', () => {
    const zeroIndexColor = UtilUiService.getColorByIndex(0);

    expect(zeroIndexColor).toBe('#F49F85');

    const oneIndexColor = UtilUiService.getColorByIndex(1);

    expect(oneIndexColor).toBe('#AD1FEA');

    const twoIndexColor = UtilUiService.getColorByIndex(2);

    expect(twoIndexColor).toBe('#62BCFA');

    const predefinedColors = ['#F49F85', '#AD1FEA', '#62BCFA'];

    const threeIndexColor = UtilUiService.getColorByIndex(3);

    expect(predefinedColors.every(color => threeIndexColor !== color)).toBe(true);
  });

  it('should sort correctly', () => {
    const sortedDescArray = UtilUiService.sortByKey(sortData, { key: 'upvotes', order: 'desc' });
    const sortedDescUpvotes = sortedDescArray.map(item => item.upvotes);

    expect(sortedDescUpvotes).toEqual([254, 112, 81]);

    const sortedAscArray = UtilUiService.sortByKey(sortData, { key: 'upvotes', order: 'asc' });
    const sortedAscUpvotes = sortedAscArray.map(item => item.upvotes);

    expect(sortedAscUpvotes).toEqual([81, 112, 254]);
  });

  it('should set correct width', () => {
    service.setInnerWidth(500);

    expect(service.isTabletDesktopWidth()).toEqual(false);
  });
});
