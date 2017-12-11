#import "ReactNativeDownloadManager.h"

@implementation ReactNativeDownloadManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(download: (NSString *)name headers:(NSDictionary *)headers config:(NSDictionary *)config onDone:(RCTResponseSenderBlock)onDone){
    NSLog(@"Yo Yo %@ at %@ at %@ at %@", name, headers,config,onDone);
}

- (void) test:(int) num1
{
    
    return result;
}

@end

