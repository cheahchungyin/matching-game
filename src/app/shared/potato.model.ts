// category: Games, Utilities
// status: Release, Beta, Alpha, Pre-alpha
// access: Public, Private, Hidden
// tags:
// date: new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);

export class Potato {
  private privateRating: number;
  private privateRatedCount: number;
  private privateViewCount: number;

  constructor(
    public name: string,
    public description: string = '',
    public path: string = '',
    public category: string = '',
    public status: string = '',
    public client: string = '',
    public access: string = 'Public',
    public tags: string[] = [],
    public date: Date = new Date()
  ) {
    this.privateRating = 0;
    this.privateRatedCount = 0;
    this.privateViewCount = 0;
  }

  // view counts
  get viewCount() {
    return this.privateViewCount;
  }

  incrementViewCount() {
    this.privateViewCount += 1;
  }

  setViewCount(value: number) {
    this.privateViewCount = value;
  }

  // ratings
  get rating() {
    return this.privateRating;
  }

  setRating(value: number) {
    this.privateRating = value;
  }

  get ratedCount() {
    return this.privateRatedCount;
  }

  setRatedCount(value: number) {
    this.privateRatedCount = value;
  }

  incrementRating(newRating: number) {
    this.privateRating = (this.privateRatedCount * this.privateRating + newRating) / (this.privateRatedCount + 1);
  }
}
