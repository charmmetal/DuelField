drama.shaders = {};
drama.shaders["blacknwhite"] = {
	src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nuniform lowp float threshold;\n\nvoid main(void)\n{	lowp vec4 front = texture2D(samplerFront, vTex);	lowp float gray = front.r * 0.299 + front.g * 0.587 + front.b * 0.114;	if (gray < threshold)\n		gl_FragColor = vec4(0.0, 0.0, 0.0, front.a);\n	else\n		gl_FragColor = vec4(front.a, front.a, front.a, front.a);\n}\n",
	extendBoxHorizontal: 0,
	extendBoxVertical: 0,
	crossSampling: false,
	preservesOpaqueness: true,
	animated: false,
	parameters: [["threshold",0,1]]
};

drama.shaders["inverse"] = {
	src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nuniform lowp float intensity;\n\nvoid main(void)\n{	lowp vec4 front = texture2D(samplerFront, vTex);	lowp vec3 inverse = vec3(front.a - front.rgb);	gl_FragColor = vec4(mix(front.rgb, inverse, intensity), front.a);\n}\n",
	extendBoxHorizontal: 0,
	extendBoxVertical: 0,
	crossSampling: false,
	preservesOpaqueness: true,
	animated: false,
	parameters: [["intensity",0,1]]
};

drama.shaders["setcolor"] = {
	src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nuniform lowp vec3 setColor;\n\nvoid main(void)\n{\n	lowp float a = texture2D(samplerFront, vTex).a;\n	\n	gl_FragColor = vec4(setColor.r * a, setColor.g * a, setColor.b * a, a);\n}\n",
	extendBoxHorizontal: 0,
	extendBoxVertical: 0,
	crossSampling: false,
	preservesOpaqueness: true,
	animated: false,
	parameters: [["setColor",0,2]]
};
