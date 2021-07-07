//by azertype 
//IG azertype_ 
//soudcloud & youtube: azertype

a.setScale (100)
a.setBins (1)
a.setSmooth(0.2)
a.settings[0].cutoff = 2
shape(2,()=> a.fft[0]*5).scrollX(1,0.1).scale(({time})=>Math.sin(time/4))
.colorama(()=> a.fft[0])
.scale(1.0001).blend(o0,0.3)
.modulateScale(osc(20,1,1)).saturate(0.2).contrast(1)
.scale(4)
.diff(shape(3,0.2)).invert(({time})=>Math.sin(time*2))
.add(shape (2,0.1).scrollY(2.5,0.1)).blend(o0,0.8).modulateHue(osc(10,10,10)).kaleid(3).scale(({time})=>Math.sin(time/4))
.out()
