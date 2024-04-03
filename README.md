# README #



A TypeScript implementation of the ACTUS library is being developed for the Mobile First Finance project, and a mock cashflow generator (fincal-xx) is being created as a demonstration.



## What is this repository for? ##

The project aims to showcase fincal-xx integration on an NPM public server and illustrate how this binary can be seamlessly incorporated into a TypeScript-supported UI.

The artefacts used in this demonstration are -

### Mobile First Finance web UI that features ###

The rapid app development platform tailored for banks and financial services prioritizes low-code functionalities, leveraging the ACTUS data model to build web and mobile apps.

Key components include:

* `Legal agreements` are integrated with DocuSign, a document-signing platform that streamlines the design of prospectuses for financial deals.

* `Product Factory` is integrated with Google Blocks, a visual programming editor that facilitates the intuitive creation of ACTUS-based products through drag-and-drop blocks.

* `Account management` integrated with SolitX enables the seamless management of contracts created using the ACTUS data model throughout their lifecycle, covering payment channels, business event processing for banks.


### FinCal artefact that features: ###

* `bondCalculator` that accepts input parameters bondAmount, interestRate, and bondTermMonths, to produce deterministic cashflows throughout the bond's duration.

* `loanCalculator` that accepts input parameters loanAmount, interestRate, and loanTermMonths, to produce deterministic cashflows over the course of the loan.



## How do I get set up? ##


- Open your terminal or command prompt.


- Run the following command:

``` sh 
npm install 
```

This command will read the package.json file in your project's root directory and install all its dependencies into the node_modules folder.


- Install the module to your project:

npm
```sh 
npm install fincal-xx
```

yarn

```sh
yarn add fincal-xx
```


- Navigate to the directory containing your TypeScript files.

Use the below code for bondCalculator:

``` typescript
import { bondCalculator } from 'fincal-xx/dist/bondCalculator';
const loan:any = new bondCalculator(50000, 10,1); // Creating a new instance of the bond class
const monthlyPaymentCycle:any = bond.calculatePaymentBreakdown(); 
console.log(JSON.stringify(monthlyPaymentCycle));
```

Use the below code for loanCalculator:

```typescript 
import { loanCalculator } from 'fincal-xx/dist/loanCalculator';
const loan:any = new loanCalculator(50000, 10,1); // Creating a new instance of the Loan class
const monthlyPaymentCycle:any = loan.calculatePaymentBreakdown(); 
console.log(JSON.stringify(monthlyPaymentCycle));
```


- Run the following command to compile a single TypeScript file

``` sh
tsc yourfile.ts
```

Replace ```yourfile.ts``` with the name of your TypeScript file.


- This command will compile all TypeScript files in the current directory and output the JavaScript files into the dist directory.

``` sh
tsc --outDir dist
```


- To execute 

``` sh
node yourfile.js
```

Response of bondCalculator

``` json
[{"interest":416.6666666666667},{"interest":416.6666666666667},{"interest":416.6666666666667},{"interest":416.6666666666667},{"interest":416.6666666666667},{"interest":416.6666666666667},{"interest":416.6666666666667},{"interest":416.6666666666667},{"interest":416.6666666666667},{"interest":416.6666666666667},{"interest":416.6666666666667},{"interest":416.6666666666667}]
```

Response of loanCalculator

```json
[{"principal":3979.127694833827,"interest":416.6666666666667,"balance":46020.87230516617},{"principal":4012.287092290775,"interest":383.5072692097181,"balance":42008.5852128754},{"principal":4045.722818059865,"interest":350.0715434406283,"balance":37962.86239481553},{"principal":4079.4371748770304,"interest":316.3571866234627,"balance":33883.4252199385},{"principal":4113.432484667673,"interest":282.3618768328208,"balance":29769.99273527083},{"principal":4147.71108870657,"interest":248.08327279392358,"balance":25622.28164656426},{"principal":4182.275347779125,"interest":213.51901372136885,"balance":21440.006298785134},{"principal":4217.12764234395,"interest":178.6667191565428,"balance":17222.878656441186},{"principal":4252.270372696817,"interest":143.52398880367656,"balance":12970.608283744368},{"principal":4287.705959135957,"interest":108.0884023645364,"balance":8682.90232460841},{"principal":4323.436842128756,"interest":72.35751937173676,"balance":4359.465482479654},{"principal":4359.46548247983,"interest":36.328879020663784,"balance":-1.7553247744217515e-10}]
```



## Who do I talk to? ##

- Repo owner or admin - Shirish Kalangi - shirish@mobilefirstfinance.com
- Other community or team - contact@mobilefirstfinance.com
- www.mobilefirstfinance.com