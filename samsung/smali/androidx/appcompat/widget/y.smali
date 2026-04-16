.class public Landroidx/appcompat/widget/y;
.super Landroidx/appcompat/widget/w;
.source "SourceFile"

# interfaces
.implements Landroidx/appcompat/widget/x;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/appcompat/widget/y$a;
    }
.end annotation


# static fields
.field private static M:Ljava/lang/reflect/Method;


# instance fields
.field private L:Landroidx/appcompat/widget/x;


# direct methods
.method static constructor <clinit>()V
    .locals 5

    :try_start_0
    const-class v0, Landroid/widget/PopupWindow;

    const-string v1, "setTouchModal"

    const/4 v2, 0x1

    new-array v2, v2, [Ljava/lang/Class;

    const/4 v3, 0x0

    sget-object v4, Ljava/lang/Boolean;->TYPE:Ljava/lang/Class;

    aput-object v4, v2, v3

    invoke-virtual {v0, v1, v2}, Ljava/lang/Class;->getDeclaredMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object v0

    sput-object v0, Landroidx/appcompat/widget/y;->M:Ljava/lang/reflect/Method;
    :try_end_0
    .catch Ljava/lang/NoSuchMethodException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    const-string v0, "MenuPopupWindow"

    const-string v1, "Could not find method setTouchModal() on PopupWindow. Oh well."

    invoke-static {v0, v1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    :goto_0
    return-void
.end method

.method public constructor <init>(Landroid/content/Context;Landroid/util/AttributeSet;II)V
    .locals 0

    invoke-direct {p0, p1, p2, p3, p4}, Landroidx/appcompat/widget/w;-><init>(Landroid/content/Context;Landroid/util/AttributeSet;II)V

    return-void
.end method


# virtual methods
.method public K(Ljava/lang/Object;)V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/w;->H:Landroid/widget/PopupWindow;

    check-cast p1, Landroid/transition/Transition;

    invoke-virtual {v0, p1}, Landroid/widget/PopupWindow;->setEnterTransition(Landroid/transition/Transition;)V

    return-void
.end method

.method public L(Ljava/lang/Object;)V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/w;->H:Landroid/widget/PopupWindow;

    check-cast p1, Landroid/transition/Transition;

    invoke-virtual {v0, p1}, Landroid/widget/PopupWindow;->setExitTransition(Landroid/transition/Transition;)V

    return-void
.end method

.method public M(Landroidx/appcompat/widget/x;)V
    .locals 0

    iput-object p1, p0, Landroidx/appcompat/widget/y;->L:Landroidx/appcompat/widget/x;

    return-void
.end method

.method public N(Z)V
    .locals 4

    sget-object v0, Landroidx/appcompat/widget/y;->M:Ljava/lang/reflect/Method;

    if-eqz v0, :cond_0

    :try_start_0
    iget-object v1, p0, Landroidx/appcompat/widget/w;->H:Landroid/widget/PopupWindow;

    const/4 v2, 0x1

    new-array v2, v2, [Ljava/lang/Object;

    const/4 v3, 0x0

    invoke-static {p1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p1

    aput-object p1, v2, v3

    invoke-virtual {v0, v1, v2}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    const-string p1, "MenuPopupWindow"

    const-string v0, "Could not invoke setTouchModal() on PopupWindow. Oh well."

    invoke-static {p1, v0}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    :cond_0
    :goto_0
    return-void
.end method

.method public a(Landroidx/appcompat/view/menu/d;Landroid/view/MenuItem;)V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/y;->L:Landroidx/appcompat/widget/x;

    if-eqz v0, :cond_0

    invoke-interface {v0, p1, p2}, Landroidx/appcompat/widget/x;->a(Landroidx/appcompat/view/menu/d;Landroid/view/MenuItem;)V

    :cond_0
    return-void
.end method

.method public d(Landroidx/appcompat/view/menu/d;Landroid/view/MenuItem;)V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/y;->L:Landroidx/appcompat/widget/x;

    if-eqz v0, :cond_0

    invoke-interface {v0, p1, p2}, Landroidx/appcompat/widget/x;->d(Landroidx/appcompat/view/menu/d;Landroid/view/MenuItem;)V

    :cond_0
    return-void
.end method

.method h(Landroid/content/Context;Z)Landroidx/appcompat/widget/s;
    .locals 1

    new-instance v0, Landroidx/appcompat/widget/y$a;

    invoke-direct {v0, p1, p2}, Landroidx/appcompat/widget/y$a;-><init>(Landroid/content/Context;Z)V

    invoke-virtual {v0, p0}, Landroidx/appcompat/widget/y$a;->setHoverListener(Landroidx/appcompat/widget/x;)V

    return-object v0
.end method
