function isTouching(object1,object2)
{
  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2 &&
    object2.y-object1.y<object1.height/2+object2.height/2)
 {
   return true;
   
 }
 else
 {
   return false;
 }
}
function bounceOff()
{
  if(mRectangle.x-fRectangle.x<mRectangle.width/2+fRectangle.width/2 &&
    fRectangle.x-mRectangle.x<fRectangle.width/2+mRectangle.width/2)
  {
    fRectangle.velocityX=fRectangle.velocityX*(-1);
    mRectangle.velocityX=mRectangle.velocityX*(-1);
  }
  if(mRectangle.y-fRectangle.y<mRectangle.height/2+fRectangle.height/2 &&
    fRectangle.y-mRectangle.y<mRectangle.height/2+fRectangle.height/2)
  {
    fRectangle.velocityY=fRectangle.velocityY*(-1);
    mRectangle.velocityY=mRectangle.velocityY*(-1);
  }
}