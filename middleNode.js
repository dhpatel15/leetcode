var middleNode = function(head) {
    if(!head || !head.next){
        return head;
    }
    var single = head;
    var double = head;
    while(double && double.next){
        single = single.next;
        double = double.next.next;
    }
    return single;
};