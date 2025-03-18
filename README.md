# Summary

## Solution

The solution is available [here](/solution/). Supporting information is provided below.

## Method
After reading through the document I started by defining the  **User Workflow** to distinguish the high level steps needed to complete the scenario.

I then looked at prototyping some **wireframes** to help discover some lower level detail that might not have been as evident in a higher level process diagram.

After this, I shaped the **database schema** to support the scenario. With more time and with a more extensive set of features to support, the schema would be adapted to include those fields and variations.

Finally, I looked at the API design; working out what access patterns were needed to retrieve or record the data.

Please view subsections below to see planning diagrams

### User Workflow

![Workflow](/architecture-images/workflow.jpg)

### Wireframe of screens

![Workflow](/architecture-images/wireframes.jpg
)

### Database design

![Workflow](/architecture-images/database.jpg)

### API design

![Workflow](/architecture-images/api-design.jpg)

## Product Enhancements

- This scenario requested that end users were supported with the a transfer, given more time I would consider the other user types (i.e. employers & advisers). This would include analysis and perhaps a summary of funds at a data hierarchy level higher. Therefore this would require changes throughout the stack, most notably, database schema changes and different relationships to the data.
- Obviously finance data is highly sensitive so would be a natural next steps to implement with the appropriate authentication and authorisation platform including verification steps

## Tech Enchancements

- The most noticeable omission here is a built front end. Given the time constraints and playing to my strongest set of skills, I choose to focus on the backend implementation.
- Each service is available in the mono repo, depnding on the usage profile of the services I might split these out in to their own code repositories
- Code in resources folder (shared code) I would build as a package that could be pulled in by a package manager
- Include types (i.e. convert to TypeScript)
- Extra validation including ensuring valid funds available and both accounts belong to a user
- Caching the balance value so that the balance doesn't have to be computed each time
- Websocket implementation around the `/transactions/transfer` endpoint given it's dependant on event driven code
- Wrapping a transaction around the transfer so that you don't end up in a situation where one transaction succeeds and the other one fails, resulting in a balance discrepancy
