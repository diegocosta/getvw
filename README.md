getvw - viewport units calculator
===== 
A Node.js command line tool to convert px in vw unit based on device viewport

### Installation
```sh
$ npm install -g getvw
```

### Usage
**Conversion PX to VW**  
```sh
$ getvw 20 16 10 --viewport 435
Current Viewport size: 435
20px => 4.60vw
16px => 3.68vw
10px => 2.30vw
```

**Conversion VW to PX**  
```sh
$ getvw 20 16 10 --reverse --viewport 435
Current Viewport size: 435
20px => 4.60vw
16px => 3.68vw
10px => 2.30vw
```

### Options
```sh
--viewport or --vp # set viewport base in pixels - default: 320
--reverse or -r # convert vw to px - default: false
--fixed or -f # formats the result using fixed-point notation - default: 2
```