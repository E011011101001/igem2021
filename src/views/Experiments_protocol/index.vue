<template lang="pug">
v-row
  v-col.col-3
    Anchor(v-if="ele" :ele="ele")
  v-col.col-9
    div(ref="exp").text-left
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Anchor from '@/components/Anchor.vue'

import marked from 'marked'

@Component({ components: { Anchor } })
export default class Exp extends Vue {
  static id = 'Exp'
  ele: HTMLElement | null = null

  mounted (): void {
    window.scrollTo(0, 0)
    const exp = this.$refs.exp as Element
    if (exp) {
      exp.innerHTML = marked(`
# Experiments Protocol

## 1.**Fundamental Protocols**

### **1.1 Liquid LB medium（Taking 1000 milliliters for example）**

1. Prepare mixture as the following inside a conical flask.

| **Components** | **Volume or mass** |
| -------------- | ------------------ |
| LB Broth       | 25g                |
| ddH2O          | 1000 mL            |

2. Then sterilize at 121℃ in an autoclave.

Note: For selective medium, after the temperature drops below 60℃, add the corresponding antibiotic and adjust to its working concentration.

### **1.2 Solid LB medium (Taking 1000 milliliters (nearly 50 dishes) for example)**

1. Prepare mixture as the following inside a conical flask.

| **Components** | **Volume or mass** |
| -------------- | ------------------ |
| Agar           | 15 g               |
| LB Broth       | 25g                |
| ddH2O          | 1000 mL            |

2. Then sterilize at 121℃ in an autoclave.

Note: For selective medium, after the temperature drops below 60℃ and before the medium solidifies, add the corresponding antibiotic and adjust to its working concentration .

### 1.3 **Standard PCR (Taking 25 microliters for example)**

1. On the ice, add all components in a PCR tube, making up to 25 µl volume reaction.

| Components                                                   | Volume or mass |
| ------------------------------------------------------------ | -------------- |
| Template                                                     | 5-50 ng        |
| Forward primer(10μM)                                         | 1 μL           |
| Reverse primer(10μM)                                         | 1 μL           |
| 2 × Phanta® Master Mix<br/>(bought from Vazyme, Number: P511-01) | 12.5 μL        |
| ddH2O                                                        | Up to 25 μL    |

2. Gently mix the PCR reactions and centrifuge briefly.
3. Transfer the PCR tubes to a thermocycler.

PCR program:

| **Step**                 | **Temperature**                            | **Time**                                        |
| ------------------------ | ------------------------------------------ | ----------------------------------------------- |
| Initial denaturalization | 95℃                                        | 30 s                                            |
| 25~35 cycles             | 95℃                                        | 15 s                                            |
| \\                    | Annealing temperature<br> depending on  primer | 15 s                                            |
| \\                    | 72℃                                        | Determined by the length<br/> of amplified fragments |
| Final Extension          | 72℃                                        | 5 min                                           |
| Hold                     | 10℃                                        | ∞                                               |

### 1.4 **1% Agarose Gel Electrophoresis（Taking 30 milliliters for example）**

1. Prepare the bed in which the gel will polymerize and the comb which is suitable.
2. Weigh 0.3 g of agarose.
3. Add 30 mL of 1X TAE.
4. Heat up the solution until the agarose is completely dissolved.
5. Add 30 µL of Gel-Red SAFE DNA Gel Stain (1000*) to the solution and mix sufficiently.
6. Pour the solution into the bed and clear all its bubbles with a tip, and then place the comb rightly and tightly.
7. Wait for its solidification.
8. Mix the samples with 6X DNA Loading Buffer in a 5:1 ratio. Inject the right amounts of samples into the wells, as well as DNA marker with appropriate molecular weight into the fit well.

### 1.5 **DpnI Restriction Enzyme Digestion (Taking 25 microliters for example)**

1. Add all the components on ice.

| Components                                 | Volume or mass |
| ------------------------------------------ | -------------- |
| PCR products                               | 25 μL          |
| DpnI<br/>(Bought from NEB, number:#R0176V) | 0.5 μL         |

2. Mix gently and incubate for 1-2 hours at 37°C.

Note: Incubation time varies along the total volume of the reaction.

### 1.6 **Gel DNA Extraction and Purification (FastPure® Gel DNA Extraction Mini Kit)**

1. After completion of DNA electrophoresis, excise band containing the target DNA fragments quickly under the ultraviolet lamp with scalpel. Weigh the gel slice in a tube (by measuring the weight difference of an empty centrifuge tube and the centrifuge tube with gel slice).
2. Add equal volume Buffer GDP. Water bath at 55℃ for 7 to 10 min, adjust the time appropriately according to the size of the gel to ensure it dissolve completely. Mix upside down twice during the water bath to accelerate the dissolution.
3. Centrifuge briefly to collect droplets on the tube wall. Place the FastPure DNA Mini Columns-G in a Collection Tubes, and transfer the solution (less than 700μL) to the FastPure DNA Mini Columns-G and centrifuge at 12,000 x g for 60 seconds.

Note: Place the FastPure DNA Mini Columns-G in the collection tube if the volume of the solution is more than 700μL, transfer the remaining solution to the adsorption column, and centrifuge again at 12,000 x g for 60 seconds.

1. Discard the filtrate and place the FastPure DNA Mini Columns-G in the collection tube. Add 300μL Buffer GDP to the FastPure DNA Mini Columns-G, and then keep still for 1 min. Centrifuge at 12,000 x g for 60 seconds.
2. Discard the filtrate and place the adsorption column in the collection tube. Add 700μL Buffer GW (Confirm absolute ethanol has been added) to the FastPure DNA Mini Columns-G. Centrifuge at 12,000 x g for 60 seconds.

Note:Adding Buffer GW along the FastPure DNA Mini Columns-G wall helps to flush the salt adhering to the tube wall completely.

1. Repeat step 5.
2. Discard the filtrate and place the FastPure DNA Mini Columns-G in the collection tube. Centrifuge at 12,000 x g for 2 min.
3. Place the FastPure DNA Mini Columns-G in a 1.5 mL sterilized centrifuge tube, then add 20 ddH2O to the center of the FastPure DNA Mini Columns-G, place it for 2 min. Centrifuge at 12000xg for 1 min.

Note:Re-added the obtained solution to the FastPure DNA Mini Columns-G so as to attain a higher yield.

1. Discard the FastPure DNA Mini Columns-G and detect the concentration of DNA solution by Nanodrop spectrophotometer, then store it at -20℃ to prevent DNA degradation.

### 1.7 **Two-fragment DNA homologous recombination (Vazyme ClonExpress® II One Step Cloning Kit)**

1. Obtain linear vectors and inserts by PCR.
2. Purify PCR products, and then detect concentration.
3. The optimum cloning vector usage and insert fragment usage for ClonExpress® II recombination reaction system is 0.03 pmol and 0.06 pmol, respectively. According to this introduction,the corresponding DNA quality can be roughly calculated by following formulas.

Optimal cloning vectors usage= [0.02* Base pairs number of cloning vectors] ng;

Optimal inserts usage= [0.04* Base pairs number of inserts] ng.

Note:Linear cloning vectors should be used between 50 and 200 ng; insert amplification products should be used between 10 and 200 ng. Select the lowest/highest amount directly when the optimal amount of DNA used exceeds this range by using the above formula.

1. Arrange the following reaction systems on ice.

| Components       | Volume       |
| ---------------- | ------------ |
| Linear  vectors  | X μL         |
| Inserts          | Y μL         |
| 5 X CE Ⅱ  Buffer | 4 μL         |
| Exnase Ⅱ         | 2 μL         |
| ddH2O            | Up to  20 μL |

Note: The values of X and Y are calculated according to the formula of Step 3.

2. Use a pipette to gently mix (do not shake fiercely), and centrifuge briefly to collect the reaction liquid to the bottom of the tube.
3. React at 37℃ for 30 min, and then cool on ice.

### 1.8 **Multi-fragment DNA homologous recombination (ClonExpress® MultiS One Step Cloning Kit)**

1. Obtain linear vectors and inserts by PCR.
2. Purify PCR products, then detect concentration.
3. The optimal DNA usage for the ClonExpress® MultiS recombination reaction system is 0.03 pmol for each fragment (including linearized vector). According to this introduction,the corresponding DNA quality can be roughly calculated by the following formula.

Optimal usage per fragment= [0.02*Base pairs of DNA fragment] ng.

Note: Linear cloning vectors should be used between 50 and 200 ng. Select the lowest/highest amount directly when the optimal amount of DNA used exceeds this range by using the above formula. The amount of each insert should be greater than 10 ng. Use 10 ng directly when using the above formula to calculate the optimum amount of use below this value.

1. Arrange the following reaction systems on ice.

| Components             | Volume       |
| ---------------------- | ------------ |
| Linear vectors         | X μL         |
| All inserted fragments | Y1-Yn  μL    |
| 5* CE MultiS Buffer    | 4 μL         |
| Exnase MultiS          | 2 μL         |
| ddH2O                  | Up to  20 μL |

Note: The values of X and Y are calculated according to the formula of Step 3.

2. Use a pipette to gently suck and mix (do not shake fiercely), and centrifuge briefly to collect the reaction liquid to the bottom of the tube.
3. React at 37℃ for 30 min, and then cool on ice immediately.

### 1.9 **Bacterial Transformation**

1. Add 10 μL of recombination product into 100 μL competent cell, mix gently, and then put tube on the ice for 30 min.
2. Heat shock for 45 s at 42℃.
3. Ice bath for 2 min.
4. Add 900 μL antibiotic-free LB medium into the tube, 220 rpm, 37°C for 45 min, resuscitate the cell.
5. Preheat the LB solid medium plate with corresponding antibiotics in a 37℃ incubator.
6. Centrifuge at 8,000 rpm for 1 min and discard 900 μL supernatant.
7. Suspend the bacteria with the remaining medium, coat the plate containing the correct resistance with a sterile coating rod gently.
8. Inverted the culture dish in incubator at 37℃ overnight.

### **1.10 Colony PCR (Taking** **10** **microliters for example)**

1. On ice, add all components in a PCR tube, making up to 10 µl volume reaction.

| Components                        | Volume or Mass |
| --------------------------------- | -------------- |
| Template*                         | 1ul            |
| F primer (10 μM)                  | 1 μL           |
| R primer (10 μM)                  | 1 μL           |
| Taq PCR Master MIX (2x, blue dye) | 5 μL           |
| ddH2O                             | Up to 10 μL    |

*Pick the colony and put it into 10ul LB medium. Take 1 ul as the template for PCR.

2. Gently mix the PCR reactions and centrifuge briefly.
3. Transfer the PCR tubes to a thermocycler.

Colony PCR program:

| **Step**                 | **Temperature**                           | **Time**                                        |
| ------------------------ | ----------------------------------------- | ----------------------------------------------- |
| Initial denaturalization | 95℃                                       | 30 s                                            |
| 25~35 cycles             | 95℃                                       | 15 s                                            |
| \\                    | Annealing temperature<br/>depending on primer | 15 s                                            |
| \\                    | 72℃                                       | Determined by the length<br/>of amplified fragments |
| Final Extension          | 72℃                                       | 5 min                                           |
| Hold                     | 10℃                                       | ∞                                               |

### 1.11 **Bacterial Glycerol Stock**

1. In the clean bench, put 500 μL of bacterial overnight culture into the cryovial and add 500 μL of 40% glycerol. Mix it well.
2. Store at -20 ℃.

### **1.12 Plasmid Extraction (Vazyme FastPure® Plasmid Mini Kit)**

1. Take 1 to 5 mL of overnight bacteria culture (12 to 16 h), add it into centrifuge tube (self-prepared), and centrifuge at 10,000 x g for 1 min. Discard the supernatant and pour it upside down on the absorbent paper to absorb the residual culture.
2. Add 250μL Buffer P1 (confirm RNase A has been added) to the centrifuge tube with the bacterial sediment left, and suspend bacterial cells by vortex.

Note: Complete resuspension of bacteria is critical to yield, and no bacterial clumps should be seen after resuspension.

3. Add 250μL Buffer P2 and mix gently by inverting the tube 10 times.

Note: Mix gently upside down. Vortex can cause genomic DNA breakage, resulting in the mixing of genomic DNA fragments in the extracted plasmid. At this time the solution became viscous and transparent, indicating that the bacteria had fully lysed. Do not take longer than 5 minutes to avoid plasmid damage.

4. Add 350μL Buffer P3 and mix gently by inverting the tube 10 times to neutralize Buffer P2 completely. White flocculent precipitation should occur at this time. Centrifuge at 13,000 x g for 10 min.

Note: Invert and blend immediately after adding Buffer P3, to prevent local precipitation from affecting the neutralization effect. Centrifuge again if there is still white precipitate in the supernatant.

1. Place the FastPure® DNA Mini Column in a Collection Tube 2 ml collection tube. Transfer the supernatant in step 4 to the FastPure® DNA Mini Column carefully, taking care not to suck the precipitate. Then centrifuge at 13,000 x g for 60 seconds. Remove the waste from the collection tube and put the FastPure® DNA Mini Column back into the collection tube.
2. Add 500 μL Buffer PW1 to the FastPure® DNA Mini Column. Centrifuge at 13,000 x g for 60 seconds. Discard the waste liquid and put the FastPure® DNA Mini Column back into the collection tube.

Note: This step is optional. Take this step if the host bacteria are end A+ and omit it if the host bacteria are end A-.

1. Add 600 μL Buffer PW2 (confirm it has been diluted with absolute ethanol) to the FastPure® DNA Mini Column. Centrifuge at 13,000 x g for 60 seconds. Discard the waste.
2. Repeat step 7.
3. Dry the FastPure® DNA Mini Column by centrifugation at 13,000 x g for 1 min, in order to remove the residual rinse from the FastPure® DNA Mini Column completely.
4. Placed the FastPure® DNA Mini Column in a new sterilized 1.5 mL centrifuge tube. Add 30 to 100 μL Elution Buffer to the center of the membrane of the FastPure® DNA Mini Column. Place at room temperature for 2 min and centrifuge at 13,000x g for 1 min to elute DNA.

Note: Preheating Elution Buffer to 55℃ can improve elution efficiency, in addition, re-add the obtained solution to the FastPure® DNA Mini Column and centrifuge again as step 10 can also improve elution efficiency.

1. Discard the FastPure® DNA Mini Column and detect the concentration of DNA solution by Nanodrop spectrophotometer, then store it at -20℃ to prevent DNA degradation.



## 2. Characterization

### 2.1 Sulphate Test

1. Centrifuge 1ml of the bacterial solution

2. Add 52ul of hydrochloric acid

3. Heat and boil to 500-800ul

4. Add 50ul of barium chromate suspension (mix and add, be sure to shake well, the precipitation is generated more quickly and rapidly)

5. Heat and boil

6. Drop ammonia until completely discoloured, then add one more drop

7. Transfer the liquid to a 1.5ml centrifuge tube and refill with distilled water to 1ml

8. Centrifuge the supernatant (gently, the precipitate will disperse very easily)

9. Measure absorbance at 420nm


### 2.2 Configuration of Barium Chromate Suspension

1. Take 0.835g of barium chromate, add water to 50ml, and heat.

2. Wash 5 times with distilled water, 50ml each time, take the last washing solution and add sulphate to observe whether there is any precipitate (no precipitate can be washed again)

### 2.3 The Promoter Repressed by CstR

1. Transform the plasmid pTrchis2A-CstR-Pcstr-mKate-CpSQR into E. coli DH5α competent cells.
2. The engineered bacteria are cultured in 25 mL LB-ampicillin (50 ng/µl) medium overnight at 37℃, 220rpm to the  OD<sub>600 nm</sub> is 0.4~0.5.
3. Equally divide the culture into 15mL centrifuge tubes, which is 5mL respectively. Centrifuge them at 4000rpm for 5 minutes. Discard the liquid.
4. Resuspend the bacteria with LB-ampicillin (50 ng/µl) .
5. Add Na<sub>2</sub>S·9H<sub>2</sub>O to the LB-ampicillin, and make the final Na<sub>2</sub>S·9H<sub>2</sub>O concentration are 0 mg/L, 1 mg/L, 2 mg/L, 3 mg/L, 4 mg/L respectively.
6. Collect 100 μL of all groups in the 96-well plate every 6 hours，and measure the OD<sub>600 nm</sub> and the fluorescence density of mKate（Subjected to 588 nm excitation. Emission intensity at 633 nm was recorded and standardized to per OD<sub>600 nm</sub>）

### 2.4 The Functional Characterization of Kill Switch System:

#### 2.4.1 Transform the plasmids pACYC-CstR-Dre-MazE-MazF and pET-Sqr-Sdo-AprBA-Sat into E. coli BL21(DE3) competent cells

1. The engineered bacteria are cultured in 25 mL LB-CmR &Amp medium overnight at 37℃, 220rpm to the OD600nm is 0.4~0.5.

2. Equally divide the culture into 15mL centrifuge tubes, which is 5mL respectively. Centrifuge them at 4000rpm for 5 minutes. Discard the liquid.

3. Resuspend the bacteria with LB-CmR & Amp

4. Add Na<sub>2</sub>S·9H<sub>2</sub>O to the LB-ampicillin, and make the final Na<sub>2</sub>S·9H<sub>2</sub>O concentration are 0 mg/L, 1 mg/L, 2 mg/L, 3 mg/L, 4 mg/L respectively.

5. Collect 100 μL of all groups in the 96-well plate every 6 hours，and measure the OD600nm

6. Dilute all of the samples to 107 times and then spread them on solid LB-CmR & Amp medium separately. Count the number of colonies in 5 cm <sup>2</sup>  per plate after cultured for 24 hours at 37℃ .Three repicas are tested in each group.



### 2.5 The Functional Characterization of Hydrogen Sulfide Oxidation in Liquid Environment

#### 2.5.1 **Reagents Preparation**

200 mL 2% glucose：4 g glucose + 200 mL dH2O

1 mol/L Dilute sulfuric acid

1 mol/L Sodium sulfide solution

Anhydrous calcium chloride

Blue litmus paper

Detection reagent I

Detection reagent II

#### 2.5.2 **Preparation of hydrogen sulfide gas**

1. Add dilute sulfuric acid dropwise to the sodium sulfide solution, and pass the generated gas through a drying tube filled with anhydrous calcium chloride to remove water

2. Collect the dried gas with a 200ml gas collection bag

#### 2.5.3 **Removal and detection of hydrogen sulfide gas**

1. The strains were cultured in 20mL medium at 37 ℃ for 10 h；
2. Add 200 μL 100mM IPTG；contimue to develop for 4 h；
3. Take 20 mL medium，centrifuge at 4000 rpm for 5min，abandon supernatant. Add 2 mL 2% glucose to wash off the residual medium，centrifuge at 4000 rpm for 5min，abandon supernatant.
4. Add 12 mL 2% glucose ，Adjust OD600 in each tube with the aid of microplate reader；
5. Take 10 mL resuspended bacterial solution, use a syringe to inject 0.2ml of hydrogen sulfide gas above the liquid surface；
6. Put the test tube in a shaker and shake at 37 degrees Celsius for two hours
7. After thoroughly shaking the liquid in the test tube, suck up 750 ul of bacterial liquid, add 25 μL Detection reagent I and II to the remaining liquid，centrifuge at 8000 rpm for 2 min；
8. After all groups are completely colored, take 200 μL for each tube and measure at 665nm.

### 2.6 The Functional Characterization of **Sulfur Ion Oxidation in Liquid Environment**

#### 2.6.1 **Reagents** **Preparation**

300 mL 2% glucose：6 g glucose + 300 mL dH2O

10 mL 100 mM Na2S：0.24 g Na2S·9 H2O + 10 mL dH20

glucose & Na2S Mixed liquid：100 mL 2% glucose + 200 μL 100 mM Na2S

Detection reagent I

Detection reagent II

#### 2.6.2 **operation**

1. The strains were cultured in 20mL medium at 37 ℃ for 10 h；

2. Add 200 μL 100mM TPTG；contimue to develop for 4 h；

3. Take 15 mL medium，centrifuge at 4000 rpm for 5min，abandon supernatant. add 2 mL 2% glucose to wash off the residual medium，centrifuge at 4000 rpm for 5min，abandon supernatant.

4. Add 8 mL 2% glucose ，Adjust OD600 in each tube with the aid of microplate reader；

5. Take 7.5 mL resuspended bacterial solution, add 7.5 mL glucose & Na2S Mixed liquid；

6. Divide the bacterial solution into 2 ml / tube,  each group into 7 tubes;

7. Put the sub packed bacterial solution into the shaking table and take a group every 30 minutes to detect sulfur ions;

8. After taking out the bacterial solution, centrifuge at 8000 rpm for 5 min, take 1.3 ml of supernatant and put it into 4 ℃ to be sent to teacher Lv fan's Laboratory for anion detection;

9. Add 25 μL Detection reagent I and II to the remaining liquid，centrifuge at 8000 rpm for 2 min；

10. After all groups are completely colored, take 200 μL for each tube to measure od665.

### 2.7 SDS-PAGE

#### 2.7.1 **Reagents** **Preparation**

1×SDS loading buffer

100 mM IPTG ：0.2383 g IPTG + 10 mL ddH2O

Marker：EpiZyme WJ 103

CBB Fast Staining Solution

#### 2.7.2 **Protein Extraction**

1. The strains were cultured in 5mL medium at 37 ℃，220rpm；

2. After developing for 11 h，add 50 μL 100 mM IPTG；Continue to develop for 4 h

3. Take 0.5 mL  medium，centrifuge at 4000 rpm for 5min，abandon supernatant；

4. Add 100 μL 1×SDS loading buffer to resuspended cells；

5. Cell lysis by ultrasound；

6. Heating at 95 ℃ for 10min；

7. Centrifuge at 12,000 rpm，4℃ for 15min，take the supernatant。

#### 2.7.3 Sample loading

1. Protein sample： 10 μL extracted protein

2. marker：EpiZyme WJ 1035μL+1×SDS 5 μL

3. Blank holes：10 μL 1×SDS

#### 2.7.4 Set the program

1. Run at 80V till the strips move to the junction of separated gel and concentrated gel；Then run at 120V till the end；


#### 2.7.5 **CBB Fast Staining**

1. Take out the gel，heat in clear water in microwave oven to boil for 60s，put on shaking table at 50 rpm for 5 min；

2. Remove the waste liquid and add the dye to immerse the gel，heat  in microwave oven to boil for 60s，put on shaking table at 50 rpm for 5 min；

3. Recover the dye solution and immerse the gel with clean water，heat  in microwave oven to boil for 60s，put on shaking table at 50 rpm for 5 min；repeat untill the background is Colorless.

   ### 2.8 RT-qPCR

#### 2.8.1 **Reagents**

#### For **RNA Extraction**

RNA isolater Total RNA Extraction Reagent

Isopropyl alcohol

chloroform

75% ethanol

ddH2O

#### **For RT-qPCR：**

TaKaRa PrimeScriptTMRT reagent Kit with gDNA Eraser

iTaq™ Universal SYBR® Green Supermix

#### 2.8.2 **Operation**

#### (1) **RNA Extraction**

1. The strains were cultured in 5mL medium at 37 ℃ for 14 h；
2. Take 3 mL medium，centrifuge at 4000 rpm for 5min，abandon supernatant；
3. Add 1 mL RNA iso to resuspended cells，transfer into 1.5 ml EP tube and stand on ice for 5min;
4. Centrifuge at 12,000 rpm，4℃ for 15min，transfer the supernatant into a new 1.5 ml EP tube；
5. Add 200 μL CHCl3，vibrate for 15s，stand on ice for 10min；
6. Centrifuge at 12,000 rpm，4℃ for 15min，take 400 μL supernatant and add 400 μL Isopropyl alcohol；store at -80℃ for 40min；
7. Centrifuge at 12,000 rpm，4℃ for 15min；abandon supernatant，add 1 mL 75% ethanol to the sediment，Centrifuge at 12,000 rpm，4℃ for 5min；abandon supernatant；
8. add 1 mL 75% ethanol to the sediment again，Centrifuge at 12,000 rpm，4℃ for 5min；abandon supernatant；
9. Centrifuge at 12,000 rpm，4℃ for 2min，siphon off the residual ethanol，place the sample in an ultra-clean platform to dry for 10min；
10. Add 20 μL dH2O to dissolve RNA

#### (2) Reaction System

| Reagents                    | Dosage           |
| --------------------------- | ---------------- |
| 5× PrimeScript Buffer       | 2μL              |
| PrimeScript RT Enzyme Mix I | 0.5μL            |
| Oligo dt Primer             | 0.5μL            |
| Random 6 mers               | 0.5μL            |
| RNA                         | 500ng            |
| ddH2O                       | Make up to 10 μL |

#### (3) **RT-PCR**  program：

| Temperature | Time  |
| ----------- | ----- |
| 37℃         | 15min |
| 85℃         | 15s   |
| 4℃          | ∞     |

#### (4) qPCR reaction system;

| Reagents                             | Dosage |
| ------------------------------------ | ------ |
| cDNA                                 | 2μL    |
| iTaq™ Universal SYBR® Green Supermix | 5μL    |
| Forward Primer                       | 0.1μL  |
| Reverse Primer                       | 0.1μL  |
| H2O                                  | 2.8μL  |

#### (5) qPCR program

| Step               | Temperature | Time       |
| ------------------ | ----------- | ---------- |
| 1                  | 95℃         | 20s        |
| 2                  | 95℃         | 10s        |
| 3                  | 60℃         | 20s        |
| 4                  | 68℃         | 5s         |
| 5：back  to step2 |             | 35  cycles |
| 6                  | 95℃         | 1 min      |
| 7                  | 60℃         | 30s        |
| 8                  | 95℃         | 30s        |

### **2.9 Characterization of promoter strength**

1. Transfer promoter-mRFP plasmid to BL21(DE3) or DH5α, coat plates and select monoclonal colony.

2. Culture the bacteria from monoclonal colony in Amp LB medium overnight.

3. Adjust the bacteria concentration using Amp LB to OD600=0.4. Culture in 37 ℃ 220 rpm till OD600=0.7.

4. Inoculate the bacterial solution into a 96-well plate in the manner of 100 μL/well, with 3 groups of parallel. Measure the OD600 and fluorescence intensity (excitation: 535nm. Emission: 620 nm) of the plates by the Microplate spectrophotometer.

5. Calculate the relative fluorescence.

### 2.10 **Random library construction**

#### 2.10.1 Promoter library construction

1. Mix promoter templates with equal molar quantities ( 10 ng each). Make sure the added volume is larger than 1 μl. Dilute the mixed templates to 5-50ng.

2. Perform standard PCR.

3. Purify PCR product by gel extraction kit and measure concentration of PCR product by Nanodrop.

#### **2.10.2 Gene CDS preparation**

1. Perform standard PCR with high fidelity enzyme.

2. Purify PCR product by gel extraction kit and measure concentration of PCR product by Nanodrop.

#### **2.10.3 Five sequences recombination**

1. Preform five sequences assembly using Vazyme ClonExpress® II One Step Cloning Kit, according to instructions.

2. Transfer the recombination product to DH5α and culture with CmR LB (chloramphenicol resistant backbone) overnight.

3. Perform plasmid extraction using Vazyme FastPure® Plasmid Mini Kit, according to instructions.

4. Perform standard PCR with high fidelity enzyme, using the mixed plasmids. Purify PCR product (2300bp and 2700 bp in this case) with gel extraction kit.

#### **2.10.4 Three sequences recombination**

1. Preform three sequences assembly using Vazyme ClonExpress® II One Step Cloning Kit, according to instructions.

2. Transfer the recombination product to BL21 and coat plates (ampicillin resistance). Select monoclonal for colony PCR and further study.


     `)
      this.ele = exp as HTMLElement
    }
  }
}
</script>
