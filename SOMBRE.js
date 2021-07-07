//by azertype 
//IG azertype_ 
//soudcloud & youtube: azertype

a.setScale (100)
a.setBins (1)
a.setSmooth(0.2)
a.settings[0].cutoff = 2
shape(9,()=> a.fft[0]*5).scrollX(1,0.1).scale(({time})=>Math.sin(time/4))
.colorama(()=> a.fft[0])
.scale(1.0001).blend(o0,()=> a.fft[0])
.modulateScale(osc(20,1,1)).saturate(3).contrast(1)
.scale(0.5)
.diff(shape(3,0.2))//.invert(({time})=>Math.sin(time*2))
.add(shape (2,0.1).scrollY(2.5,0.1)).blend(o0,0.8).modulateHue(osc(10,10,10))
.out()
