.class Landroidx/appcompat/widget/m$c$b;
.super Ljava/lang/Object;
.source "SourceFile"

# interfaces
.implements Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/appcompat/widget/m$c;->e()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic b:Landroidx/appcompat/widget/m$c;


# direct methods
.method constructor <init>(Landroidx/appcompat/widget/m$c;)V
    .locals 0

    iput-object p1, p0, Landroidx/appcompat/widget/m$c$b;->b:Landroidx/appcompat/widget/m$c;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onGlobalLayout()V
    .locals 2

    iget-object v0, p0, Landroidx/appcompat/widget/m$c$b;->b:Landroidx/appcompat/widget/m$c;

    iget-object v1, v0, Landroidx/appcompat/widget/m$c;->O:Landroidx/appcompat/widget/m;

    invoke-virtual {v0, v1}, Landroidx/appcompat/widget/m$c;->N(Landroid/view/View;)Z

    move-result v0

    if-nez v0, :cond_0

    iget-object v0, p0, Landroidx/appcompat/widget/m$c$b;->b:Landroidx/appcompat/widget/m$c;

    invoke-virtual {v0}, Landroidx/appcompat/widget/w;->i()V

    goto :goto_0

    :cond_0
    iget-object v0, p0, Landroidx/appcompat/widget/m$c$b;->b:Landroidx/appcompat/widget/m$c;

    invoke-virtual {v0}, Landroidx/appcompat/widget/m$c;->L()V

    iget-object v0, p0, Landroidx/appcompat/widget/m$c$b;->b:Landroidx/appcompat/widget/m$c;

    invoke-static {v0}, Landroidx/appcompat/widget/m$c;->K(Landroidx/appcompat/widget/m$c;)V

    :goto_0
    return-void
.end method
