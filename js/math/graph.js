class Graph {
    constructor(points = [], segments = []) {
        this.points = points;
        this.segments = segments;

    }

    addPoint(point) {
        this.points.push(point);
         
    }

    containsPoint(point) {
        return this.points.find((p) => p.equals(point));
    }

    tryAddPoint(point) {
        if (!this.containsPoint(point)) {
            return true;
        
        }
    return false;
    }

    addSegment(seg) {
        this.segments.push(seg);
    } 

    containsSegment(seg) {
        return this.segments.find((s) => s.equals(seg));
    }

    tryAddSegment(seg) {
        if (!this.containsSegment(seg) && !seg.p1.equals(seg.p2)) {
                return true;

        }
        return false; 
 }

 removeRandomPoint(seg) {
    const segs = this.getSegmentsWithPoints(point);
    for (const seg of segs) {
        this.removeRandomPoint(segs);
    }
    this.points.splice(this.points.indexOf(seg), 1);
}

    removeSegment(seg) {
        this.segments.splice(this.segments.indexOf(seg), 1);
    }

    getSegmentsWithPoints(point) {
        const segs = [];
        for (const seg of this.segments) {
            if (seg.includes(point)) {
                segs.push(seg);
            }
        }
        return segs;
    }

    draw(ctx){
        for (const seg of this.segments) {
         seg.draw(ctx);
        }
    
        for (const point of this.points) {
         point.draw(ctx);
       }
    }

}