import {sortTweetsByDate} from "./index";
import {ASC_ORDER, DESC_ORDER} from "../constants";

describe('sortTweetsByDate', () => {
  it('should return an array in ascending order', () => {
    const dates = [
      {date: "2019-11-22T21:02:22-03:00"},
      {date: "2019-11-24T21:02:22-03:00"},
      {date: "2019-11-11T21:02:22-03:00"}
    ]
    expect(sortTweetsByDate(dates, DESC_ORDER)).toEqual([
      { date: '2019-11-24T21:02:22-03:00' },
      { date: '2019-11-22T21:02:22-03:00' },
      { date: '2019-11-11T21:02:22-03:00' }
    ])
  })

  it('should return an array in descending order', () => {
    const dates = [
      {date: "2019-11-22T21:02:22-03:00"},
      {date: "2019-11-24T21:02:22-03:00"},
      {date: "2019-11-11T21:02:22-03:00"}
    ]
    expect(sortTweetsByDate(dates, ASC_ORDER)).toEqual([
      { date: '2019-11-11T21:02:22-03:00' },
      { date: '2019-11-22T21:02:22-03:00' },
      { date: '2019-11-24T21:02:22-03:00' }
    ])
  })
})
