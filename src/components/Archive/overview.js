// Overvieuw of the data structure

projects=[];

daySchemes=[{id: id, projectId: projectId, [employee, employee, ...]},
            {id: id, projectId: projectId, [employee, employee, ...]}]

weekList = [week, week,...];

week = {
  id: uuid(),
  weekNumber: weekNumber,
  year: 2017,
  monday: {
    id: uuid(),
    name: name,
    date: createDate(name, weekNumber, year),
    plannings: [id, id, id]
  },
  tuesday : {
    id: uuid(),
    name: name,
    date: createDate(name, weekNumber, year),
    daySchemes: []
  },
  wednesday: {
    id: uuid(),
    name: name,
    date: createDate(name, weekNumber, year),
    plannings:
  },
  thursday: {
    id: uuid(),
    name: name,
    date: createDate(name, weekNumber, year),
    plannings: []
  },
  friday: {
    id: uuid(),
    name: name,
    date: createDate(name, weekNumber, year),
    plannings: []
  }
}
