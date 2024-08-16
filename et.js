const line = {
  color: 'blue',
  style: 'dotted',
  width: 2
};

ctx.lineWidth = line.width;
ctx.strokeStyle = line.color;
ctx.setLineDash([5, 3]);
ctx.lineDashOffset = 0;
