.class final Lq/a$a;
.super Landroid/view/View$AccessibilityDelegate;
.source "SourceFile"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lq/a;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x1a
    name = "a"
.end annotation


# instance fields
.field private final a:Lq/a;


# direct methods
.method constructor <init>(Lq/a;)V
    .locals 0

    invoke-direct {p0}, Landroid/view/View$AccessibilityDelegate;-><init>()V

    iput-object p1, p0, Lq/a$a;->a:Lq/a;

    return-void
.end method


# virtual methods
.method public dispatchPopulateAccessibilityEvent(Landroid/view/View;Landroid/view/accessibility/AccessibilityEvent;)Z
    .locals 1

    iget-object v0, p0, Lq/a$a;->a:Lq/a;

    invoke-virtual {v0, p1, p2}, Lq/a;->a(Landroid/view/View;Landroid/view/accessibility/AccessibilityEvent;)Z

    move-result p1

    return p1
.end method

.method public getAccessibilityNodeProvider(Landroid/view/View;)Landroid/view/accessibility/AccessibilityNodeProvider;
    .locals 1

    iget-object v0, p0, Lq/a$a;->a:Lq/a;

    invoke-virtual {v0, p1}, Lq/a;->b(Landroid/view/View;)Lr/b;

    move-result-object p1

    if-eqz p1, :cond_0

    invoke-virtual {p1}, Lr/b;->a()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/view/accessibility/AccessibilityNodeProvider;

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return-object p1
.end method

.method public onInitializeAccessibilityEvent(Landroid/view/View;Landroid/view/accessibility/AccessibilityEvent;)V
    .locals 1

    iget-object v0, p0, Lq/a$a;->a:Lq/a;

    invoke-virtual {v0, p1, p2}, Lq/a;->d(Landroid/view/View;Landroid/view/accessibility/AccessibilityEvent;)V

    return-void
.end method

.method public onInitializeAccessibilityNodeInfo(Landroid/view/View;Landroid/view/accessibility/AccessibilityNodeInfo;)V
    .locals 1

    iget-object v0, p0, Lq/a$a;->a:Lq/a;

    invoke-static {p2}, Lr/a;->x(Landroid/view/accessibility/AccessibilityNodeInfo;)Lr/a;

    move-result-object p2

    invoke-virtual {v0, p1, p2}, Lq/a;->e(Landroid/view/View;Lr/a;)V

    return-void
.end method

.method public onPopulateAccessibilityEvent(Landroid/view/View;Landroid/view/accessibility/AccessibilityEvent;)V
    .locals 1

    iget-object v0, p0, Lq/a$a;->a:Lq/a;

    invoke-virtual {v0, p1, p2}, Lq/a;->f(Landroid/view/View;Landroid/view/accessibility/AccessibilityEvent;)V

    return-void
.end method

.method public onRequestSendAccessibilityEvent(Landroid/view/ViewGroup;Landroid/view/View;Landroid/view/accessibility/AccessibilityEvent;)Z
    .locals 1

    iget-object v0, p0, Lq/a$a;->a:Lq/a;

    invoke-virtual {v0, p1, p2, p3}, Lq/a;->g(Landroid/view/ViewGroup;Landroid/view/View;Landroid/view/accessibility/AccessibilityEvent;)Z

    move-result p1

    return p1
.end method

.method public performAccessibilityAction(Landroid/view/View;ILandroid/os/Bundle;)Z
    .locals 1

    iget-object v0, p0, Lq/a$a;->a:Lq/a;

    invoke-virtual {v0, p1, p2, p3}, Lq/a;->h(Landroid/view/View;ILandroid/os/Bundle;)Z

    move-result p1

    return p1
.end method

.method public sendAccessibilityEvent(Landroid/view/View;I)V
    .locals 1

    iget-object v0, p0, Lq/a$a;->a:Lq/a;

    invoke-virtual {v0, p1, p2}, Lq/a;->i(Landroid/view/View;I)V

    return-void
.end method

.method public sendAccessibilityEventUnchecked(Landroid/view/View;Landroid/view/accessibility/AccessibilityEvent;)V
    .locals 1

    iget-object v0, p0, Lq/a$a;->a:Lq/a;

    invoke-virtual {v0, p1, p2}, Lq/a;->j(Landroid/view/View;Landroid/view/accessibility/AccessibilityEvent;)V

    return-void
.end method
