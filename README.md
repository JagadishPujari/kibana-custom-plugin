# kibana-custom-plugin
kibana custom plugin help to creation visualisation 

Clone repo and place plugin inside ```kibana/src/plugins``` folder
## install this library with peer dependencies:

```yarn add chart.js react-chartjs-2```

or

```npm install --save chart.js react-chartjs-2```

Then, import and use individual components:
```
import { Doughnut } from 'react-chartjs-2';

<Doughnut data={...} />
```
