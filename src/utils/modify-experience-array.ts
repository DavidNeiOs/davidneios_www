import { months, current } from "./localized-data";

type Locale = 'en' | 'es' | 'fr'
type DateObject = {
  month: number
  year: number
}

export function modifyExperienceArray(arr: any[], locale: Locale): any[] {
  return arr.map(exp => {
    const startDate = new Date(exp.startDate);
    const newStartDate: DateObject = {
      month: startDate.getMonth(),
      year: startDate.getFullYear(),
    }
    let newEndDate: DateObject = {} as DateObject;
    if (!!exp.endDate) {
      const endDate = new Date(exp.endDate);
      newEndDate = {
      month: endDate.getMonth(),
      year: endDate.getFullYear(),
      }
    }

    const timeString = buildTimeString(newStartDate, newEndDate, !!exp.isCurrent, locale)

    return {
      ...exp,
      startDate: newStartDate,
      endDate: newEndDate,
      timeString,
      isCurrent: !!exp.isCurrent
    }
  })
}

function buildTimeString(startTime: DateObject, endTime: DateObject, isCurrent: boolean, locale: Locale): string {
  const localMonths = months[locale]
  const startString = `${localMonths[startTime.month]} ${startTime.year}`;
  const endString = isCurrent ? current[locale] : `${localMonths[endTime.month]} ${endTime.year}`;

  return `${startString} - ${endString}`
}