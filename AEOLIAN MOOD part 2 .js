//by azertype 
//IG azertype_ 
//soudcloud & youtube : azertype

//part1
a.setScale (100)
a.setBins (1)
a.setSmooth(0.2)
a.settings[0].cutoff = 2
shape(2,()=> a.fft[0]*2).scrollX(1,0.1).scale(({time})=>Math.sin(time/4)).mult(osc(1,1,))
.colorama(0.01)
.scale(1.0001).blend(o0,()=> a.fft[0])
.modulateScale(osc(20,1,1)).saturate(()=> a.fft[0]*2).contrast(1)
.scale(0.5)
.diff(o0).invert(({time})=>Math.sin(time*2))
.add(shape (2,0.1).scrollY(2.5,0.1)).blend(o0,0.3).modulateHue(osc(10,10,10))
.out()


//part 2
a.setScale (100)
a.setBins (1)
a.setSmooth(0.2)
a.settings[0].cutoff = 2
shape(10,()=> a.fft[0]*2).scrollX(1,0.1).scale(({time})=>Math.sin(time/10)).mult(osc(10,1,10))
//.colorama(0.01)
.scale(1.0001).blend(o0,()=> a.fft[0]/2)
.modulateScale(osc(2,1,1)).saturate(()=> a.fft[0]*2).contrast(1)
.scale(0.5)
.diff(o0).invert(({time})=>Math.sin(time*2))
.add(shape (2,0.1).scrollY(2.5,0.1)).blend(o0,0.0).modulateHue(osc(10,0,10))
.out()
