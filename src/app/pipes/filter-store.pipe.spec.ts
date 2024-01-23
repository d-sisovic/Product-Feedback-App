import { Sort } from '../ts/enums/sort.enum';
import { FilterStorePipe } from './filter-store.pipe';

const mockData = [
  {
    "id": 1,
    "title": "Add tags for solutions",
    "category": "enhancement",
    "upvotes": 112,
    "status": "suggestion",
    "description": "Easier to search for solutions based on a specific stack."
  },
  {
    "id": 2,
    "title": "Add a dark theme option",
    "category": "feature",
    "upvotes": 99,
    "status": "suggestion",
    "description": "It would help people with light sensitivities and who prefer dark mode."
  },
  {
    "id": 3,
    "title": "Q&A within the challenge hubs",
    "category": "feature",
    "upvotes": 65,
    "status": "suggestion",
    "description": "Challenge-specific Q&A would make for easy reference."
  },
  {
    "id": 4,
    "title": "Add image/video upload to feedback",
    "category": "enhancement",
    "upvotes": 51,
    "status": "suggestion",
    "description": "Images and screencasts can enhance comments on solutions."
  },
  {
    "id": 5,
    "title": "Ability to follow others",
    "category": "feature",
    "upvotes": 42,
    "status": "suggestion",
    "description": "Stay updated on comments and solutions other people post."
  },
  {
    "id": 6,
    "title": "Preview images not loading",
    "category": "bug",
    "upvotes": 3,
    "status": "suggestion",
    "description": "Challenge preview images are missing when you apply a filter."
  },
  {
    "id": 7,
    "title": "More comprehensive reports",
    "category": "feature",
    "upvotes": 123,
    "status": "planned",
    "description": "It would be great to see a more detailed breakdown of solutions."
  },
  {
    "id": 8,
    "title": "Learning paths",
    "category": "feature",
    "upvotes": 28,
    "status": "planned",
    "description": "Sequenced projects for different goals to help people improve."
  },
  {
    "id": 9,
    "title": "One-click portfolio generation",
    "category": "feature",
    "upvotes": 62,
    "status": "in-progress",
    "description": "Add ability to create professional looking portfolio from profile."
  },
  {
    "id": 10,
    "title": "Bookmark challenges",
    "category": "feature",
    "upvotes": 31,
    "status": "in-progress",
    "description": "Be able to bookmark challenges to take later on.",
    "comments": []
  },
  {
    "id": 11,
    "title": "Animated solution screenshots",
    "category": "bug",
    "upvotes": 9,
    "status": "in-progress",
    "description": "Screenshots of solutions with animations don't display correctly."
  },
  {
    "id": 12,
    "title": "Add micro-interactions",
    "category": "enhancement",
    "upvotes": 71,
    "status": "live",
    "description": "Small animations at specific points can add delight.",
    "comments": []
  }
];

describe('FilterStorePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterStorePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return correct filtered/sorted data by Sort.MOST_UPVOTES', () => {
    const filterStore = { sort: Sort.MOST_UPVOTES, category: "enhancement" };

    const pipe = new FilterStorePipe();
    const transformedData = pipe.transform(mockData, filterStore);
    const ids = transformedData.map(item => item.id);

    expect(transformedData.length).toBe(3);
    expect(ids).toEqual([1, 12, 4]);
  });

  it('should return correct filtered/sorted data by Sort.LEAST_UPVOTES', () => {
    const filterStore = { sort: Sort.LEAST_UPVOTES, category: "feature" };

    const pipe = new FilterStorePipe();
    const transformedData = pipe.transform(mockData, filterStore);
    const ids = transformedData.map(item => item.id);

    expect(transformedData.length).toBe(7);
    expect(ids).toEqual([8, 10, 5, 9, 3, 2, 7]);
  });
});
